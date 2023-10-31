import styled from 'styled-components';

interface FooterProps {
  copyright?: string;
}
const FooterContainer = styled.footer`
  width: 100%;
  color: ${({ theme: { colors } }) => colors.light};
  font-size: 0.8rem;
  padding: 5px 0;
  text-align: left;
`;

const Copyright = styled.p`
  a {
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.light};

    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
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
