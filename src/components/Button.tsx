import React from 'react';

import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Btn = styled.button`
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  font-weight: bold;
  border: 1px solid currentColor;
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
  min-width: 60px;

  &:hover {
    transition: all 0.8s;
    transform: scale(1.1);
    border: 1px solid inherit;
  }

  .btn-txt {
    margin-right: 8px;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      transition: all 0.6s;
      transform: scale(1.1);
    }
  }

  svg {
    font-size: 20px;
  }
`;

export const Button = ({
  onClick,
  children,
}: ButtonProps): React.ReactElement => {
  return <Btn onClick={onClick}>{children}</Btn>;
};
