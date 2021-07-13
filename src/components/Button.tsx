import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Btn = styled.button`
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme: { colors } }) => colors.dark};
  color: ${({ theme: { colors } }) => colors.light};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  border: 2px solid ${({ theme: { colors } }) => colors.light};
  font-family: ${({ theme: { fonts } }) => fonts.secondary};
  min-width: 50px;

  &:hover {
    transition: all 0.8s;
    color: ${({ theme: { colors } }) => colors.primary};
    transform: scale(1, 1);
    border: 2px solid ${({ theme: { colors } }) => colors.primary};
  }

  span {
    margin-right: 8px;
  }

  a {
    color: ${({ theme: { colors } }) => colors.light};

    &:hover {
      transition: all 0.6s;
      color: ${({ theme: { colors } }) => colors.primary};
      transform: scale(1, 1);
    }
  }

  svg {
    font-size: 20px;
  }
`;

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
}: ButtonProps): React.ReactElement => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
