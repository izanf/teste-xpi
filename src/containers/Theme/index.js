import React from 'react';
import styled from 'styled-components';

import Image from 'components/Image';

const Container = styled.div`
display: flex;
background: var(--nero-color);

@media (max-width: 576px) {
flex-direction: column;
}
`;

const LeftSide = styled.div`
color: #FFF;
padding: 1rem 3rem 0 1rem;
`;

const RightSide = styled.div`
flex: 1;
padding: 4rem 8rem 8rem 1rem;

@media (max-width: 576px) {
padding: 0;
}
`;

const Theme = ({ children }) => (
  <Container>
    <LeftSide>
      <Image name="logo" size="50px" />
    </LeftSide>
    <RightSide>
      {children}
    </RightSide>
  </Container>
);

export default Theme;
