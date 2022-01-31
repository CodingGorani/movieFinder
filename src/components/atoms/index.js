import styled, { css } from 'styled-components';

export const FlexBox = styled.div`
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
