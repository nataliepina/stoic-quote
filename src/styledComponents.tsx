import styled from "styled-components";

export const Main = styled.main`
  padding: 2.5rem 0;
  width: 100%;
  opacity: 0.7;
`;

export const BlockQuote = styled.blockquote`
  text-align: center;
  font-size: 1.25rem;
  color: hsl(180, 7%, 97%);
  display: block;
`;

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  margin: 0.25rem 0.5rem;
  padding: 0.25rem 0.75rem;
  background-color: black;
  color: hsl(202, 5%, 69%);
  font-size: 1.25rem;
  border: 2px solid hsl(202, 5%, 69%);

  &:hover {
    transition: all 0.8s;
    color: white;
    transform: scale(1, 1);
  }
`;
