import styled from 'styled-components';

type QuoteProps = {
  quote: QuoteData | null;
};

export interface QuoteData {
  quote: string;
  author: string;
}

const QuoteWrapper = styled.div`
  padding-block-end: ${({ theme: { sizes } }) => sizes.md};
  color: ${({ theme: { colors } }) => colors.text};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  width: 100%;

  @media (min-width: 767px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  }
`;

const BlockQuote = styled.blockquote`
  max-width: 50ch;
`;

const Citation = styled.cite`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};

  &:before {
    content: '— ';
  }

  @media (min-width: 767px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  }
`;

export const Quote = ({ quote }: QuoteProps): JSX.Element => {
  return (
    <QuoteWrapper>
      <BlockQuote>{quote?.quote}</BlockQuote>
      <Citation>{quote?.author}</Citation>
    </QuoteWrapper>
  );
};
