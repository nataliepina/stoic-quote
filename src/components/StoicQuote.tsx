import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import { copyText } from '../helpers/helpers';
import DisplayQuote from './DisplayQuote';
interface QuoteData {
  quote: string;
  author: string;
}

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  margin: 0.25rem 0.5rem;
  padding: 0.25rem 0.75rem;
  background-color: black;
  color: hsl(202, 5%, 69%);
  font-size: 1.25rem;
  border: 2px solid hsl(202, 5%, 69%);

  &:hover {
    transition: all 0.8s;
    color: white;
    transform: scale(1, 1);
  }
`;

const StoicQuote = (): JSX.Element => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [toolTip, setToolTip] = useState('Copy');
  const text = useRef('');
  const newQuoteText = 'New Quote';

  useEffect(() => {
    const stoicQuote = require('stoic-quotes'); // eslint-disable-line @typescript-eslint/no-var-requires

    const getQuote = async () => {
      try {
        setLoading(true);
        const res = await stoicQuote();
        const { quote, author } = res;

        setQuote({ quote, author });
        text.current = `"${quote}" -${author}`;
      } catch (e) {
        setQuote(null);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };
    if (!quote) getQuote();
  }, [quote]);

  const getNewQuote = () => {
    setQuote(null);
    setLoading(true);
  };

  const handleCopy = () => {
    copyText(text.current);
    setToolTip('Copied');
    setTimeout(() => setToolTip('Copy'), 1500);
  };

  return (
    <>
      <div className="quote">
        <section className="main">
          {loading ? (
            <Loader type="ThreeDots" color="lightgray" height={80} width={80} />
          ) : (
            <DisplayQuote quote={quote} />
          )}
        </section>
        <section className="btn-wrapper">
          <Button onClick={getNewQuote}>{newQuoteText}</Button>
          <Button onClick={handleCopy}>{toolTip}</Button>
          <Button>
            <a
              id="tweet-quote"
              title="Tweet This Quote!"
              href={`https://twitter.com/intent/tweet?text=${text.current}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tweet"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Button>
        </section>
      </div>
    </>
  );
};

export default StoicQuote;
