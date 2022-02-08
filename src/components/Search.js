import { useState } from 'react';
import { SearchBar, Button, FlexDiv } from '../components/atoms/index';
import styled from 'styled-components';

const Container = styled(FlexDiv)`
  justify-content: center;
`;

function Search({ handleClick }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <Container>
      <SearchBar
        type="text"
        className="searchInput"
        onChange={handleInputChange}
        value={input}
      />
      <Button className="searchButton" onClick={() => handleClick(input)}>
        검색
      </Button>
    </Container>
  );
}

export default Search;
