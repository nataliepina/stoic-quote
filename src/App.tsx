import React from 'react';
import './App.css';
import Footer from './components/Footer';
import StoicQuote from './components/StoicQuote';

const App: React.FC = (): JSX.Element => {
  const title = 'Stoic Quotes';
  return (
    <main className="app">
      <h1 className="title">{title}</h1>
      <StoicQuote />
      <Footer />
    </main>
  );
};

export default App;
