import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    src: url('./assets/fonts/Roboto-Regular.ttf') format('ttf');
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto-Bold';
    src: url('./assets/fonts/Roboto-Bold.ttf') format('ttf');
    font-style: bold;
    font-weight: 700;
    font-display: fallback;
  }

  h1, h2, h3,
  h4, h5, h6 {
    font-family: 'Roboto'
  }
`;

export default GlobalStyle;
