import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { FlexDiv, SearchBar, Button, Grid } from '../components/atoms/index';
import MovieCard from '../components/MovieCard';

function MainPage() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [movieNames, setMovieNames] = useState([]);

  useEffect(() => {
    if (query.length !== 0) getMovieData(query);
  }, [query]);

  useEffect(() => {
    if (movieData.items) {
      let result = movieData.items.map((el, idx) => el.title);
      console.log(result);
      setMovieNames(result);
    }
  }, [movieData]);

  async function getMovieData(query) {
    try {
      const result = await axios.get('http://localhost:3030/movies/naver', {
        params: {
          query: query,
        },
      });
      console.log(result.data);
      setMovieData(result.data);
    } catch (err) {
      console.log(err);
    }
    setQuery('');
  }

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleClick = () => {
    console.log('click!');
    setQuery(input);
  };

  return (
    <FlexDiv column center>
      <FlexDiv middle>
        <SearchBar
          type="text"
          className="searchInput"
          onChange={handleInputChange}
          value={input}
        />
        <Button className="searchButton" onClick={handleClick}>
          검색
        </Button>
      </FlexDiv>
      {movieData.total ? (
        <p>
          총 <b>{movieData.total}</b>개의 영화를 찾았습니다
        </p>
      ) : (
        ''
      )}
      <Grid rows={5}>
        {movieData.items
          ? movieData.items.map((el, idx) => (
              <MovieCard movieData={el} key={idx} />
            ))
          : ''}
      </Grid>
    </FlexDiv>
  );
}

export default MainPage;
