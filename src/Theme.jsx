import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    light: '#e2e8ec',
    med: '#AAB8C2',
    dark: '#0a0c0e',
    primary: '#a7deec',
  },
  fonts: ['Fraunces', 'sans-serif'],
  fontSizes: {
    sm: '.8em',
    base: '1em',
    md: '1.8em',
    lg: '2.8em',
    xl: '3em',
  },
  sizes: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    xxl: '70px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
