import styled from 'styled-components';

interface FooterProps {
  copyright?: string;
}

const FooterContainer = styled.footer`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-block: 1rem;
`;

const Copyright = styled.p`
  a {
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.text};

    &:hover {
      color: ${({ theme: { colors } }) => colors.accent};
    }
  }
`;

export const Footer = ({ copyright }: FooterProps): React.ReactElement => {
  return (
    <FooterContainer>
      <Copyright>
        <a
          data-testid="footer"
          href="https://github.com/nataliepina/stoic-quote"
          target="_blank"
          rel="noopener noreferrer"
        >
          {copyright}
        </a>
      </Copyright>
    </FooterContainer>
  );
};
