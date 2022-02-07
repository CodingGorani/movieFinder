import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FlexDiv } from './atoms/index';
import LoadingCard from './LoadingCard';

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
          center
          middle
          width={'100%'}
          maxWidth={'150px'}
          height={'100%'}
        >
          <img
            src={data.image}
            onClick={() => {
              window.open(data.link, data.title, '_blank');
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
            }}
          />
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
