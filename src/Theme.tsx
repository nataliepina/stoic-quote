import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colors: {
    light: '#ffffff',
    med: '#000000',
    dark: '#0a0c0e',
    primary: '#963d72',
    body: '#0a0c0e',
    text: '#f9f9f9',
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
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    xxl: '70px',
  },
};

export const secondaryTheme = {
  colors: {
    light: '#0a0c0e',
    med: '#ffffff',
    dark: '#d2d7db',
    primary: '#850f55',
    body: '#ffffff',
    text: '#0a0c0e',
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
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    xxl: '70px',
  },
};

export const marbleTheme = {
  colors: {
    light: '#4C2f21',
    med: '#D6C9BD',
    dark: '#1b130f',
    primary: '#606060',
    body: '#d2ccc7',
    text: '#161515',
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
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    xxl: '70px',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
