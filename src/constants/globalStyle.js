import { createGlobalStyle } from 'styled-components';
import normalize from 'assets/css/normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

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

  :root {
    --nobel-color: #999999;
    --snow-color: #fafafa;
    --nero-color: #161616;
    --b5-o-color: rgba(0, 0, 0, .5);

    --xlarge-size: 48px;
    --large-size: 24px;
    --medium-size: 18px;
    --small-size: 16px;
    --xsmall-size: 14px;
  }

  h1, h2, h3,
  h4, h5, h6,
  label, p {
    font-family: 'Roboto';
    margin: 0;
  }

  figure {
    margin: 0;
  }
`;

export default GlobalStyle;
