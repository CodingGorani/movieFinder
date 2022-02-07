import styled, { css } from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  width: ${(props) => props.width || '100vw'};
  height: ${(props) => props.height || 'auto'};
  max-width: ${(props) => props.maxWidth || 'none'};
  margin: auto;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.middle &&
    css`
      justify-content: center;
      justify-self: center;
    `}

  ${(props) =>
    props.center &&
    css`
      align-items: center;
      align-self: center;
    `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.rows || 10}, 1fr);
  grid-gap: ${(props) => props.gap || '30px'};
  width: ${(props) => props.width || 'fit-content'};
`;

export const SearchBar = styled.input`
  all: unset;
  border: 1px solid black;
  margin-right: 1em;
  width: 30%;
  padding: 1em;
`;

export const Button = styled.button`
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
