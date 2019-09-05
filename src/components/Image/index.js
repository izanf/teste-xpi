import React from 'react';

import images from 'assets/images';

import { Figure, Img } from './components';

const Image = ({ name, src, size }) => (
  <Figure size={size}>
    <Img src={name ? images[name] : src} />
  </Figure>
);

export default Image;
