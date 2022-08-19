import './App.css';

import React, { useState } from 'react';

import styled, { ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import StoicQuote from './components/QuoteContainer';
import GlobalStyles from './global-styles';
import { theme as primaryTheme } from './Theme';

export const Container = styled.main`
  text-align: center;
  height: 100vh;
  font-size: calc(10px + 2vmin);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const App = (): React.ReactElement => {
  const title = 'Stoic Quotes';
  const copyright = 'Natalie Pina \u00A9 2022';

  const [theme, setTheme] = useState(primaryTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header title={title} setTheme={setTheme} />
        <StoicQuote />
        <Footer copyright={copyright} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
