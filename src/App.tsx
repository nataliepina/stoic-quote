import './App.css';

import { useState } from 'react';

import { ThemeSelector } from 'components/ThemeSelector';
import styled, { ThemeProvider } from 'styled-components';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import StoicQuote from './components/QuoteContainer';
import GlobalStyles from './global-styles';
import { theme as primaryTheme } from './Theme';

export const Container = styled.main`
  height: 100%;
  /* text-align: center; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  padding: 1rem;
`;

const TITLE = 'Stoic Quote';
const COPYRIGHT = 'Natalie Pina \u00A9 2024';

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState(primaryTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <ThemeSelector setTheme={setTheme} />
        <Header title={TITLE} />
        <StoicQuote />
        <Footer copyright={COPYRIGHT} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
