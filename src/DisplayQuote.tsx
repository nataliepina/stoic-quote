import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BlockQuote } from "./styledComponents";

interface QuoteData {
  quote: string;
  author: string;
}

type Props = {
  quote: QuoteData | null;
};

const DisplayQuote: React.FC<Props> = ({ quote }) => {
  return (
    <>
      <div className="line-container">
        <div className="line-icon">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </div>
      </div>
      <div className="quote-container">
        <BlockQuote>{quote?.quote}</BlockQuote>
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
