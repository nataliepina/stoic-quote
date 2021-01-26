import React from "react";
import "./App.css";
import Footer from "./Footer";
import StoicQuote from "./StoicQuote";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="Title">Stoic Quotes</h1>
      <StoicQuote />
      <Footer />
    </div>
  );
};

export default App;
