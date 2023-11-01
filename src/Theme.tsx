import baseStyled, { ThemedStyledInterface } from 'styled-components';

const baseTheme = {
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

export const theme = {
  ...baseTheme,
  colors: {
    light: '#ffffff',
    med: '#000000',
    dark: '#0a0c0e',
    primary: '#963d72',
    body: '#0a0c0e',
    text: '#f9f9f9',
  },
};

export const secondaryTheme = {
  ...baseTheme,
  colors: {
    light: '#0a0c0e',
    med: '#ffffff',
    dark: '#d2d7db',
    primary: '#850f55',
    body: '#ffffff',
    text: '#0a0c0e',
  },
};

export const stoneTheme = {
  ...baseTheme,
  colors: {
    light: '#333333',
    med: '#B0B0B0',
    dark: '#333333',
    primary: '#555555',
    body: '#D9D9D9',
    text: '#111111',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
