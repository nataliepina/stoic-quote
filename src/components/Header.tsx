import { faCloudMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { secondaryTheme, theme as primaryTheme, Theme } from '../Theme';
import Button from './Button';

interface HeaderProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  title: string;
}
export const HeaderTitle = styled.h1`
  margin: 0.75rem auto 0;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  font-weight: 300;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  position: relative;

  @media (min-width: 768px) {
    position: absolute;
  }
`;

const Header: React.FC<HeaderProps> = (
  props: HeaderProps
): React.ReactElement => {
  const { title } = props;
  function setLightTheme() {
    props.setTheme(secondaryTheme);
  }

  function setDarkTheme() {
    props.setTheme(primaryTheme);
  }

  return (
    <HeaderContainer>
      <ButtonWrapper>
        <Button onClick={setLightTheme}>
          <span role="button" aria-label="Light Mode"></span>
          <FontAwesomeIcon icon={faLightbulb} />
        </Button>
        <Button onClick={setDarkTheme}>
          <span role="button" aria-label="Dark Mode"></span>
          <FontAwesomeIcon icon={faCloudMoon} />
        </Button>
      </ButtonWrapper>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
