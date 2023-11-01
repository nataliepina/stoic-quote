import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import { copyText } from '../helpers/helpers';
import { Button } from './Button';
import { QuoteData, Quote } from './Quote';
// @ts-ignore
import stoicQuote from 'stoic-quotes';

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

const QuoteContainer = (): React.ReactElement => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(false);
  const [toolTip, setToolTip] = useState('Copy');
  const text = useRef('');

  useEffect(() => {
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
        <Button onClick={getNewQuote}>New Quote</Button>
        <Button onClick={handleCopy}>{toolTip}</Button>
        <Button>
          <a
            id="tweet-quote"
            title="Tweet This Quote!"
            href={`https://twitter.com/intent/tweet?text=${text.current}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet
          </a>
        </Button>
      </ActionButtonsWrapper>
    </MainContainer>
  );
};

export default QuoteContainer;
