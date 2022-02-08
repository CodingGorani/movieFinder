import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FlexDiv } from './atoms/index';
import LoadingCard from './LoadingCard';
import ImageFlipCard from './ImageFlipCard';

function MovieCard({ movieData }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    setData(movieData);
    return () => {
      setLoading(false);
    };
  }, [movieData]);

  return (
    <>
      {data ? (
        <FlexDiv
          column
          middle
          spaceBetween
          width={'100%'}
          maxWidth={'150px'}
          height={'280px'}
        >
          <ImageFlipCard data={data} />
          <p
            dangerouslySetInnerHTML={{ __html: data.title }}
            style={{ textAlign: 'center', overflow: 'hidden', height: '1.5em' }}
          ></p>
        </FlexDiv>
      ) : (
        <LoadingCard />
      )}
    </>
  );
}

export default MovieCard;
