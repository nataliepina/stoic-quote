import React from 'react';
import './App.css';
import StoicQuote from './StoicQuote';
import Footer from './Footer';

const App: React.FC = () => {
	return (
		<div className="App">
			<h1 className="Title">Daily Stoic Quote</h1>
			<StoicQuote />
			<Footer />
		</div>
	);
};

export default App;