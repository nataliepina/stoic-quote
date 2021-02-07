import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

type QuoteProps = {
  quote: QuoteData | null;
};

interface QuoteData {
  quote: string;
  author: string;
}

const DisplayQuote = ({ quote }: QuoteProps): JSX.Element => {
  return (
    <>
      <div className="line-container">
        <div className="line-icon">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
      </div>

      <div className="quote-container">
        <blockquote className="blockquote">{quote?.quote}</blockquote>
        <cite className="author">- {quote?.author}</cite>
      </div>

      <div className="line-container">
        <div className="line-icon">
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
      </div>
    </>
  );
};

export default DisplayQuote;
