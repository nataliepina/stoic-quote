import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
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
  padding: ${({ theme: { sizes } }) => sizes.xxl};
  width: 90%;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
`;

const BlockQuote = styled.blockquote`
  text-align: center;
`;

const Citation = styled.cite`
  &:before {
    content: '— ';
  }
`;

const Line = styled.div`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};

  &:before,
  &:after {
    color: ${({ theme: { colors } }) => colors.light};
    width: 35%;
    height: 1px;

    /* Changed to border-top (instead of border) to simulate a line better */
    border-top: 2px solid #ccc;

    /* Styles added */
    display: inline-block;
    content: '';

    /* Use padding to vertical align the line */
    /* Use padding in em for a responsive icon height */
    padding-top: 0.5em;

    /* Use margins to give the lines some space around the icon */
    /* Use margins in % for a responsive space */
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const DisplayQuote = ({ quote }: QuoteProps): JSX.Element => {
  return (
    <>
      <Line>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </Line>

      <QuoteWrapper>
        <BlockQuote>{quote?.quote}</BlockQuote>
        <Citation>{quote?.author}</Citation>
      </QuoteWrapper>

      <Line>
        <FontAwesomeIcon icon={faQuoteRight} />
      </Line>
    </>
  );
};

export default DisplayQuote;
