import styled from 'styled-components';
import { Button } from './Button';
import {
  Theme,
  stoneTheme,
  theme as primaryTheme,
  secondaryTheme,
} from '../Theme';

interface HeaderProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  title: string;
}

const HeaderTitle = styled.h1`
  margin: 2rem auto 0;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  font-weight: 300;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${({ theme: { sizes } }) => sizes.md};
  flex-direction: column;

  @media (min-width: 768px) {
    position: absolute;
  }
`;

export const Header = ({ title, setTheme }: HeaderProps) => {
  const switchTheme = (newTheme: Theme) => {
    if (setTheme) setTheme(newTheme);
  };

  return (
    <HeaderContainer>
      <ButtonWrapper>
        <Button
          onClick={() => switchTheme(secondaryTheme)}
          aria-label="Switch to Light Theme"
        >
          Light Theme
        </Button>
        <Button
          onClick={() => switchTheme(primaryTheme)}
          aria-label="Switch to Dark Theme"
        >
          Dark Theme
        </Button>
        <Button
          onClick={() => switchTheme(stoneTheme)}
          aria-label="Switch to Stone Theme"
        >
          Stone Theme
        </Button>
      </ButtonWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};
