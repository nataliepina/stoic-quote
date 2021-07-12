import { render } from '@testing-library/react';
import React from 'react';
import QuoteContainer from '../components/QuoteContainer';

describe('Quote Container tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<QuoteContainer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render quote buttons', async () => {
    const { getByText } = render(<QuoteContainer />);

    expect(getByText('Copy')).toBeInTheDocument();
    expect(getByText('New Quote')).toBeInTheDocument();
  });
});
