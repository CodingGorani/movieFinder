import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FlexDiv } from './atoms';

function ImageFlipCard({ data }) {
  const [fliped, setFliped] = useState(false);

  const handleFliping = () => {
    setFliped((prev) => !prev);
  };
  return !fliped ? (
    <FlexDiv
      width={'100%'}
      height={'100%'}
      onMouseOver={handleFliping}
      column
      middle
      style={{
        boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
      }}
    >
      <img
        src={data.image}
        onClick={() => {
          window.open(data.link, data.title, '_blank');
        }}
        style={{
          width: '100%',
          maxHeight: '210px',
          objectFit: 'cover',
        }}
      ></img>
    </FlexDiv>
  ) : (
    <div
      onMouseOut={handleFliping}
      style={{
        width: '100%',
        height: '100%',
        boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
      }}
    >
      TA DA!
    </div>
  );
}

export default ImageFlipCard;
