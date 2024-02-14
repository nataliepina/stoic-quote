import styled, { css } from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  active?: boolean;
}

const activeStyles = css`
  border: 1px solid ${({ theme: { colors } }) => colors.accent};
  color: ${({ theme: { colors } }) => colors.accent};
`;

export const Btn = styled.button<ButtonProps>`
  cursor: pointer;
  padding-block: 0.5rem;
  padding-inline: 0.75rem;
  background-color: transparent;
  color: ${({ theme: { colors } }) => colors.text};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  font-family: ${({ theme: { fonts } }) => fonts.body};
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid currentColor;
  border-radius: 2px;

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

  ${({ active }) => active && activeStyles}

  ${({ active }) =>
    active &&
    css`
      outline: 1px solid ${({ theme: { colors } }) => colors.accent};
    `}


    @media (min-width: 767px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  }
`;

export const Button = ({
  onClick,
  children,
  active,
}: ButtonProps): React.ReactElement => {
  return (
    <Btn onClick={onClick} active={active}>
      {children}
    </Btn>
  );
};
