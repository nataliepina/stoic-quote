import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Fraunces', sans-serif;
    background: ${({ theme: { colors } }) => colors.body};
    color: ${({ theme: { colors } }) => colors.text};
  }
  `;

export default GlobalStyles;
