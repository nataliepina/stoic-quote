import { render } from '@testing-library/react';
import React from 'react';
import DisplayQuote from '../components/DisplayQuote';

describe('DisplayQuote tests', () => {
  interface QuoteData {
    quote: string;
    author: string;
  }

  const quote: QuoteData = { quote: 'testing', author: 'the tester' };

  it('should render without breaking', () => {
    render(<DisplayQuote quote={quote} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<DisplayQuote quote={quote} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render quote text and author', () => {
    const { getByText } = render(<DisplayQuote quote={quote} />);
    expect(getByText('testing')).toBeInTheDocument();
    expect(getByText('- the tester')).toBeInTheDocument();
  });
});
