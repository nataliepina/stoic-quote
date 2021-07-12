import { render } from '@testing-library/react';
import React from 'react';
import Quote from '../components/Quote';

describe('Quote tests', () => {
  interface QuoteData {
    quote: string;
    author: string;
  }

  const quote: QuoteData = { quote: 'testing', author: 'the tester' };

  it('should render without breaking', () => {
    render(<Quote quote={quote} />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Quote quote={quote} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render quote text and author', () => {
    const { getByText } = render(<Quote quote={quote} />);
    expect(getByText('testing')).toBeInTheDocument();
    expect(getByText('- the tester')).toBeInTheDocument();
  });
});
