import React from "react";

const Footer = () => {
  const copyright: string = "Natalie Pina &copy;2021";

  return (
    <footer className="footer">
      <p>
        <a
          data-testid="footer"
          href="https://github.com/nataliepina/stoic-quote"
          target="_blank"
          rel="noopener noreferrer"
        >
          {copyright}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
