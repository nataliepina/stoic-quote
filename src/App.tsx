import './App.css';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './global-styles';
import { theme as primaryTheme } from './Theme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import StoicQuote from './components/QuoteContainer';

export const Container = styled.main`
  text-align: center;
  height: 100vh;
  font-size: calc(10px + 2vmin);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const TITLE = 'Stoic Quote';
const COPYRIGHT = 'Natalie Pina \u00A9 2023';

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState(primaryTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header title={TITLE} setTheme={setTheme} />
        <StoicQuote />
        <Footer copyright={COPYRIGHT} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
