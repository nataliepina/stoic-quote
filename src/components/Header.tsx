import React from 'react';

import styled from 'styled-components';

import {
  marbleTheme,
  secondaryTheme,
  theme as primaryTheme,
  Theme,
} from '../Theme';
import Button from './Button';

interface HeaderProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  title: string;
}
export const HeaderTitle = styled.h1`
  margin: 2rem auto 0;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  font-weight: 300;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: ${({ theme: { sizes } }) => sizes.md};
  flex-direction: column;

  @media (min-width: 768px) {
    position: absolute;
  }
`;

const Header = (props: HeaderProps): React.ReactElement => {
  const { title } = props;
  function setLightTheme() {
    props.setTheme(secondaryTheme);
  }
  function setDarkTheme() {
    props.setTheme(primaryTheme);
  }

  function setStoneTheme() {
    props.setTheme(marbleTheme);
  }

  return (
    <HeaderContainer>
      <ButtonWrapper>
        <Button onClick={setLightTheme}>
          <span role="button" aria-label="Light Mode"></span>
          Light Theme
        </Button>
        <Button onClick={setDarkTheme}>
          <span role="button" aria-label="Dark Mode"></span>
          Dark Theme
        </Button>
        <Button onClick={setStoneTheme}>
          <span role="button" aria-label="Stone Mode"></span>
          Marble Theme
        </Button>
      </ButtonWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
