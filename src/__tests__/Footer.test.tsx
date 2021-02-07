import { render } from '@testing-library/react';
import React from 'react';
import Footer from '../components/Footer';

describe('Footer tests', () => {
  it('should render without breaking', () => {
    render(<Footer />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render footer text', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer')).toHaveTextContent('Natalie Pina');
    expect(getByTestId('footer')).toHaveAttribute(
      'href',
      'https://github.com/nataliepina/stoic-quote'
    );
  });
});
