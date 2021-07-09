import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import StoicQuote from './components/StoicQuote';
import Title from './components/Title';
import Theme from './Theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100;0,300;0,400;0,500;1,300&display=swap');

  body {
    font-family: 'Fraunces', sans-serif;
  }
`;

export const Container = styled.main`
  text-align: center;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  background-color: ${({ theme: { colors } }) => colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const App = () => {
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
