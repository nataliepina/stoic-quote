import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

describe('App tests', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<App />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render an H1', () => {
		const { getByText } = render(<App />);
		expect(getByText('Stoic Quotes')).toBeInTheDocument();
	});
});