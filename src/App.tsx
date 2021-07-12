import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import StoicQuote from './components/QuoteContainer';
import Title from './components/Header';
import Theme from './Theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Fraunces', sans-serif;
    background-color: #0a0c0e;
  }
`;

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
  const copyright = 'Natalie Pina \u00A9 2021';

  return (
    <Theme>
      <GlobalStyles />
      <Container>
        <Title title={title} />
        <StoicQuote />
        <Footer copyright={copyright} />
      </Container>
    </Theme>
  );
};

export default App;
