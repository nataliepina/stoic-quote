import React from 'react';
import { ThemeProvider } from 'styled-components';

interface ThemeProps {
  // colors: {
  //   light: string;
  //   med: string;
  //   dark: string;
  //   primary: string;
  // };
  // font: string[];
  // fontSizes: {
  //   sm: string;
  //   base: string;
  //   md: string;
  //   lg: string;
  //   xl: string;
  // };
  // sizes: {
  //   sm: string;
  //   md: string;
  //   lg: string;
  //   xl: string;
  //   xxl: string;
  // };

  children?: React.ReactNode;
}

const theme = {
  colors: {
    light: '#e2e8ec',
    med: '#AAB8C2',
    dark: '#0a0c0e',
    primary: '#a7deec',
  },
  fonts: {
    primary: 'Fraunces',
    secondary: 'Cinzel',
  },
  fontSizes: {
    sm: '.8em',
    base: '1em',
    md: '1.3em',
    lg: '2em',
    xl: '2.8em',
  },
  sizes: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    xxl: '70px',
  },
};

const Theme = ({ children }: ThemeProps): React.ReactElement => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
