import React from 'react';
import ShowQuote from '../ShowQuote';
import { render } from '@testing-library/react';

describe('ShowQuote tests', () => {
	interface QuoteData {
		quote: string;
		author: string;
	}

	const quote: QuoteData = { quote: 'testing', author: 'the tester' };

	it('should render without breaking', () => {
		render(<ShowQuote quote={quote} />);
	});

	it('should match snapshot', () => {
		const { asFragment } = render(<ShowQuote quote={quote} />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render ShowQuote text', () => {
		const { getByText } = render(<ShowQuote quote={quote} />);
		expect(getByText('testing')).toBeInTheDocument();
		expect(getByText('- the tester')).toBeInTheDocument();
	});
});