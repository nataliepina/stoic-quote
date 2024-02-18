import './App.css';

import { useState } from 'react';

import { ThemeSelector } from 'components/ThemeSelector';
import styled, { ThemeProvider } from 'styled-components';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import StoicQuote from './components/QuoteContainer';
import GlobalStyles from './global-styles';
import { theme as primaryTheme } from './Theme';

export const AppContainer = styled.main`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > * {
    flex: 1;
  }
`;

const TITLE = 'Stoic Quote';
const COPYRIGHT = 'Natalie Pina \u00A9 2024';

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState(primaryTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <ThemeSelector setTheme={setTheme} />
        <Header title={TITLE} />
        <StoicQuote />
        <Footer copyright={COPYRIGHT} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
