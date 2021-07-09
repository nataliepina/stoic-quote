import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import { copyText } from '../helpers/helpers';
import DisplayQuote, { QuoteData } from './DisplayQuote';

export const QuoteContainer = styled.div`
  width: 75vw;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  place-items: center center;
  font-family: 'Fraunces', serif;
  font-weight: 300;
  padding: 2.5rem 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  margin: ${({ theme: { sizes } }) => sizes.xl} auto;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: ${({ theme: { sizes } }) => sizes.md};
  font-family: 'Fraunces', serif;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme: { colors } }) => colors.dark};
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  border: 2px solid ${({ theme: { colors } }) => colors.light};
  font-family: 'Cinzel', serif;

  &:hover {
    transition: all 0.8s;
    color: ${({ theme: { colors } }) => colors.primary};
    transform: scale(1, 1);
  }

  a {
    color: ${({ theme: { colors } }) => colors.light};

    &:hover {
      transition: all 0.6s;
      color: ${({ theme: { colors } }) => colors.primary};
      transform: scale(1, 1);
    }
  }
`;

const StoicQuote = (): React.ReactElement => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [toolTip, setToolTip] = useState('Copy');
  const text = useRef('');
  const newQuoteText = 'New Quote';

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
      <QuoteContainer>
        <section>
          {loading ? (
            <Loader type="ThreeDots" color="lightgray" height={80} width={80} />
          ) : (
            <DisplayQuote quote={quote} />
          )}
        </section>
        <ButtonWrapper>
          <Button onClick={getNewQuote}>{newQuoteText}</Button>
          <Button onClick={handleCopy}>{toolTip}</Button>
          <Button>
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
      </QuoteContainer>
    </>
  );
};

export default StoicQuote;
