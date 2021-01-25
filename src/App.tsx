import React from 'react';
import './App.css';
import StoicQuote from './StoicQuote';
import Footer from './Footer';

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