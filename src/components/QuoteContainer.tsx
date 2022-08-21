import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React, { useEffect, useRef, useState } from 'react';

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
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
  color: ${({ theme: { colors } }) => colors.light};

  @media (min-width: 768px) {
    padding: 2.5rem 0;
  }
`;

export const ActionButtonsWrapper = styled.div`
  margin: ${({ theme: { sizes } }) => sizes.xl} auto;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: ${({ theme: { sizes } }) => sizes.md};
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

const Line = styled.div`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};

  &:before,
  &:after {
    color: ${({ theme: { colors } }) => colors.light};
    width: 300px;
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
        <FaQuoteLeft />
        {loading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="currentColor"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        ) : (
          <Quote quote={quote} />
        )}

        <FaQuoteRight />
      </section>
      <ActionButtonsWrapper>
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
            {tweetQuote}
          </a>
        </Button>
      </ActionButtonsWrapper>
    </MainContainer>
  );
};

export default QuoteContainer;
