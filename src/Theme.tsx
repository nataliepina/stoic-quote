import { DefaultTheme } from 'styled-components';

// Define your theme type
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
      secondary: string;
      body: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    colors: {
      text: string;
      background: string;
      border: string;
      accent: string;
    };
  }
}

const baseTheme: DefaultTheme = {
  fonts: {
    primary: 'Fraunces, Arial, sans-serif',
    secondary: 'Cinzel, Georgia, serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  fontSizes: {
    xs: '0.8rem',
    sm: '1rem',
    base: '1.25rem',
    md: '1.5rem',
    lg: '1.6rem',
    xl: '2rem',
    xxl: '3rem',
  },
  sizes: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    xxl: '70px',
  },
  colors: {
    text: '#f9f9f9',
    background: '#0a0c0e',
    border: '#101212',
    accent: '#3c7a89',
  },
};

export const theme: DefaultTheme = {
  ...baseTheme,
};

export const secondaryTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    text: '#0a0c0e',
    background: '#ffffff',
    border: '#f5f5f5',
    accent: '#3c7a89',
  },
};

export const stoneTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    text: '#2f2f2f',
    background: '#e2e2e2',
    border: '#d6d6d6',
    accent: '#3c7a89',
  },
};
