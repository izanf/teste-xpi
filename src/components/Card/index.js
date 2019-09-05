import React from 'react';

import Image from 'components/Image';
import {
  Container, Title, ArtistName
} from './components';

const image = 'https://pbs.twimg.com/media/DZ68ZKGWsAAAxMp.jpg';

const Card = () => (
  <Container>
    <Image src={image} size="100%" />
    <Title>Nome do álbum</Title>
    <ArtistName>Nome do artista</ArtistName>
  </Container>
);

export default Card;
