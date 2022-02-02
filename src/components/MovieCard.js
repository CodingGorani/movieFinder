import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FlexDiv } from './atoms/index';

const Image = styled.img`
  background-color: red;
  height: 300px
  width: ${300 * 0.675}px
`;

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
        <FlexDiv column middle width={'auto'}>
          <Image
            src={data.image}
            onClick={() => {
              window.open(data.link, data.title, '_blank');
            }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: data.title }}
            style={{ textAlign: 'center' }}
          ></div>
          <br />
        </FlexDiv>
      ) : (
        <div>loading</div>
      )}
    </>
  );
}

export default MovieCard;
