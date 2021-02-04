import React from 'react';
import './App.css';
import Footer from './components/Footer';
import StoicQuote from './components/StoicQuote';

const App: React.FC = () => {
  const title: string = 'Stoic Quotes';
  return (
    <div className="app">
      <h1 className="title">{title}</h1>
      <StoicQuote />
      <Footer />
    </div>
  );
};

export default App;
