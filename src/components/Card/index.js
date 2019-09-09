import React from 'react';

import Image from 'components/Image';
import {
  Container, Title, ArtistName
} from './components';

const Card = ({ data }) => (
  <Container>
    <Image src={data.images[0].url} size="100%" />
    <Title>{data.name}</Title>
    <ArtistName>{data.artists[0].name}</ArtistName>
  </Container>
);

export default Card;
