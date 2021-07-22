import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopy, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import { copyText } from '../helpers/helpers';
import Button from './Button';
import Quote, { QuoteData } from './Quote';

export const MainContainer = styled.div`
  width: 75vw;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  place-items: center center;
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  padding: 0.5rem 0;

  @media (min-width: 768px) {
    padding: 2.5rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  margin: ${({ theme: { sizes } }) => sizes.xl} auto;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: ${({ theme: { sizes } }) => sizes.md};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const QuoteContainer = (): React.ReactElement => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(false);
  const [toolTip, setToolTip] = useState('Copy');
  const text = useRef('');
  const newQuoteText = 'New Quote';
  const tweetQuote = 'Tweet';

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const stoicQuote = require('stoic-quotes');

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
        // setLoading(false);
        // Use below to see loading state
        setTimeout(() => setLoading(false), 300);
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
    <MainContainer>
      <section>
        {loading ? (
          <Loader type="ThreeDots" color="lightgray" height={80} width={80} />
        ) : (
          <Quote quote={quote} />
        )}
      </section>
      <ButtonWrapper>
        <Button onClick={getNewQuote}>
          <span className="btn-txt">{newQuoteText}</span>
          <FontAwesomeIcon icon={faRedo} />
        </Button>
        <Button onClick={handleCopy}>
          <span className="btn-txt">{toolTip}</span>
          <FontAwesomeIcon icon={faCopy} />
        </Button>
        <Button>
          <span className="btn-txt">{tweetQuote}</span>
          <a
            id="tweet-quote"
            title="Tweet This Quote!"
            href={`https://twitter.com/intent/tweet?text=${text.current}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Button>
      </ButtonWrapper>
    </MainContainer>
  );
};

export default QuoteContainer;
