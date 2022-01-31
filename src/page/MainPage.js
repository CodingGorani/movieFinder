import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { FlexBox, SearchBar, Button } from '../components/atoms/index';

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
    <FlexBox column center>
      <FlexBox middle>
        <SearchBar
          type="text"
          className="searchInput"
          onChange={handleInputChange}
          value={input}
        />
        <Button className="searchButton" onClick={handleClick}>
          검색
        </Button>
      </FlexBox>
      {movieNames.map((el, idx) => (
        <Fragment key={idx}>
          <div dangerouslySetInnerHTML={{ __html: el }}></div>
          <br />
        </Fragment>
      ))}
    </FlexBox>
  );
}

export default MainPage;
