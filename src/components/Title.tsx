import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
}
export const HeaderTitle = styled.h1`
  margin: 0.75rem auto 0;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  font-weight: 300;
  font-family: 'Cinzel', serif;
`;

const Title: React.FC<TitleProps> = ({
  title,
}: TitleProps): React.ReactElement => {
  return <HeaderTitle>{title}</HeaderTitle>;
};

export default Title;
