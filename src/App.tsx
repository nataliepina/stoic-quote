import React from "react";
import "./App.css";
import Footer from "./Footer";
import StoicQuote from "./StoicQuote";

const App: React.FC = () => {
  const title: string = "Stoic Quotes";
  return (
    <div className="app">
      <h1 className="title">{title}</h1>
      <StoicQuote />
      <Footer />
    </div>
  );
};

export default App;
