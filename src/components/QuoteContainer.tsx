import React from 'react';

import useQuote from 'hooks/useQuote';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

import { Button } from './Button';
import { Quote } from './Quote';

export const MainContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding-inline: 0.5rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  place-items: center center;
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text};

  @media (min-width: 767px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  }
`;

const SectionWrapper = styled.section`
  border-radius: 20px;
  background-color: ${({ theme: { colors } }) => colors.border};
  padding: 2rem;
  margin-block: 2rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { sizes } }) => sizes.md};
`;

const QuoteContainer = (): React.ReactElement => {
  const { quote, loading, toolTip, text, handleCopy, getNewQuote } = useQuote();

  return (
    <MainContainer>
      <SectionWrapper>
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
      </SectionWrapper>
      <ButtonsWrapper>
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
      </ButtonsWrapper>
    </MainContainer>
  );
};

export default QuoteContainer;
