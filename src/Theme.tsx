import baseStyled, { ThemedStyledInterface } from 'styled-components';

const baseTheme = {
  fonts: {
    primary: 'Fraunces, Arial, sans-serif',
    secondary: 'Cinzel, Georgia, serif',
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  fontSizes: {
    xs: '0.8rem', // Extra small
    sm: '1rem', // Small
    base: '1.25rem', // Base (equivalent to 20px)
    md: '1.563rem', // Medium
    lg: '1.953rem', // Large
    xl: '2.441rem', // Extra large
    xxl: '3.052rem', // Double extra large
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
    text: '#f9f9f9',
    background: '#0a0c0e',
    border: '#101212',
    accent: '#3c7a89',
  },
};

export const secondaryTheme = {
  ...baseTheme,
  colors: {
    text: '#0a0c0e',
    background: '#ffffff',
    border: '#f5f5f5',
    accent: '#3c7a89',
  },
};

export const stoneTheme = {
  ...baseTheme,
  colors: {
    text: '#2f2f2f',
    background: '#e2e2e2',
    border: '#d6d6d6',
    accent: '#3c7a89',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
