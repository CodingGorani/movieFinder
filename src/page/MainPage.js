import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { FlexDiv, SearchBar, Button, Grid } from '../components/atoms/index';
import MovieCard from '../components/MovieCard';
import Search from '../components/Search';
import styled from 'styled-components';

const Header = styled(FlexDiv)`
  justify-content: center;
`;

function MainPage() {
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

  const handleSetQuery = (input) => {
    console.log('click!');
    setQuery(input);
  };

  return (
    <div>
      <Header>
        <Search handleClick={handleSetQuery} />
      </Header>
      {movieData.total ? (
        <p>
          총 <b>{movieData.total}</b>개의 영화를 찾았습니다
        </p>
      ) : (
        ''
      )}
      <Grid coloumns={5} rows={2}>
        {movieData.items
          ? movieData.items.map((el, idx) => (
              <MovieCard movieData={el} key={idx} />
            ))
          : ''}
      </Grid>
    </div>
  );
}

export default MainPage;
