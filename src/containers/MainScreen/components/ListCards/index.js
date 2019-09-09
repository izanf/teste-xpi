import React from 'react';
import styled from 'styled-components';

import Card from 'components/Card';

const Container = styled.div``;

const Content = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 3rem;
`;

const Title = styled.h2`
font-size: var(--large-size);
font-weight: normal;
color: white;
margin: 5rem 0 2rem;
`;

const ListCards = ({ search, data }) => (
  <Container>
    <Title>{`Resultados encontrados para "${search}"`}</Title>
    <Content>
      {data.map(item => <Card data={item} />)}
    </Content>
  </Container>
);

export default ListCards;
