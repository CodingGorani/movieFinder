import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

const FlexBox = styled.div`
  display: flex;
  width: 100vw;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.middle &&
    css`
      justify-content: center;
    `}

  ${(props) =>
    props.center &&
    css`
      align-items: center;
    `}
`;

const SearchBar = styled.input`
  all: unset;
  border: 1px solid black;
  margin-right: 1em;
  width: 30%;
  padding: 1em;
`;

const Button = styled.button`
  all: unset;
  border: 2px solid black;
  color: white;
  background: rgb(0, 0, 0);
  padding-right: 1em;
  padding-left: 1em;
  &:hover {
    transition: all 0.3s ease;
    background: white;
    color: black;
    border: 1px solid black;
    cursor: pointer;
  }
`;

function MainPage() {
  const [input, setInput] = useState('');
  const [movieData, setMovieData] = useState([]);
  const [movieNames, setMovieNames] = useState([]);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!sending) return;

    console.log(process.env.REACT_APP_KOBIS_KEY);

    axios
      .get(
        'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json',
        {
          params: {
            key: '',
            movieNm: input,
          },
        }
      )
      .then((res) => {
        let { movieList } = res.data.movieListResult;
        setMovieData(movieList);
      })
      .catch((err) => {
        console.log(err);
      });

    setSending(false);
  }, [sending]);

  useEffect(() => {
    let results = [];
    movieData.forEach((el, idx) => {
      results.push(el.movieNM);
    });

    setMovieNames(results);
  }, [movieData]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleClick = () => {
    setSending(true);
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
      {movieNames}
    </FlexBox>
  );
}

export default MainPage;
