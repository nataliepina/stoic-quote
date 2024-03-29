import styled from 'styled-components';

interface HeaderProps {
  title: string;
}

const HeaderTitle = styled.h1`
  margin-inline: auto;
  margin-block: 2rem;
  color: ${({ theme: { colors } }) => colors.text};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  font-weight: 700;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};
