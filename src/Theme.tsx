import baseStyled, { ThemedStyledInterface } from 'styled-components';

// interface ThemeProps {
//   theme: {
//     colors: {
//       light: string;
//       med: string;
//       dark: string;
//       primary: string;
//       body: string;
//       text: string;
//     };
//     fonts: {
//       primary: string;
//       secondary: string;
//     };
//     fontSizes: {
//       sm: string;
//       base: string;
//       md: string;
//       lg: string;
//       xl: string;
//     };
//     sizes: {
//       sm: string;
//       md: string;
//       lg: string;
//       xl: string;
//       xxl: string;
//     };
//   };
//   children?: React.ReactNode;
// }

export const theme = {
  colors: {
    light: '#e2e8ec',
    med: '#AAB8C2',
    dark: '#0a0c0e',
    primary: '#a7deec',
    body: '#0a0c0e',
    text: '#e2e8ec',
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

export const secondaryTheme = {
  colors: {
    light: '#0a0c0e',
    med: '#AAB8C2',
    dark: '#e2e8ec',
    primary: '#20778d',
    body: '#e2e8ec',
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
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    xxl: '70px',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
