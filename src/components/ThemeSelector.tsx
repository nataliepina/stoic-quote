import React, { useState } from 'react';

import styled, { DefaultTheme } from 'styled-components';

import { secondaryTheme, stoneTheme, theme as primaryTheme } from '../Theme';
import { Button } from './Button';

interface ThemeSelectorProps {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

const ThemeSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: end;
  padding: 0 20px;
`;

const ThemeSelectorWrapper = styled.div`
  display: flex;
  gap: ${({ theme: { sizes } }) => sizes.sm};
`;

export const ThemeSelector = ({ setTheme }: ThemeSelectorProps) => {
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme | null>(null);

  const switchTheme = (newTheme: DefaultTheme) => {
    if (setTheme) {
      setTheme(newTheme);
      setSelectedTheme(newTheme);
    }
  };

  return (
    <ThemeSelectorContainer>
      <ThemeSelectorWrapper>
        <Button
          onClick={() => switchTheme(secondaryTheme)}
          aria-label="Switch to Light Theme"
          active={selectedTheme === secondaryTheme}
        >
          Light
        </Button>
        <Button
          onClick={() => switchTheme(primaryTheme)}
          aria-label="Switch to Dark Theme"
          active={selectedTheme === primaryTheme}
        >
          Dark
        </Button>
        <Button
          onClick={() => switchTheme(stoneTheme)}
          aria-label="Switch to Stone Theme"
          active={selectedTheme === stoneTheme}
        >
          Stone
        </Button>
      </ThemeSelectorWrapper>
    </ThemeSelectorContainer>
  );
};
