import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';

import styled from 'styled-components';

type QuoteProps = {
  quote: QuoteData | null;
};

export interface QuoteData {
  quote: string;
  author: string;
}

const QuoteWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: ${({ theme: { sizes } }) => sizes.md};
  width: 90%;
  color: ${({ theme: { colors } }) => colors.light};
`;

const BlockQuote = styled.blockquote`
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
`;

const Citation = styled.cite`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};

  &:before {
    content: '— ';
  }
`;

const Quote = ({ quote }: QuoteProps): JSX.Element => {
  return (
    <>
      <QuoteWrapper>
        <BlockQuote>{quote?.quote}</BlockQuote>
        <Citation>{quote?.author}</Citation>
      </QuoteWrapper>
    </>
  );
};

export default Quote;
