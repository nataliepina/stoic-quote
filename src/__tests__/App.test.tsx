import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App tests', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Stoic Quotes')).toBeInTheDocument();
  });
});
