import React from 'react';
import StoicQuote from '../StoicQuote';
import { render } from '@testing-library/react';

describe('Stoic Quote tests', () => {
	it('should match snapshot', () => {
		const { asFragment } = render(<StoicQuote />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render quote text', async () => {
		const { getByText } = render(<StoicQuote />);

		expect(getByText('Copy')).toBeInTheDocument();
    expect(getByText('New Quote')).toBeInTheDocument();
	});
});