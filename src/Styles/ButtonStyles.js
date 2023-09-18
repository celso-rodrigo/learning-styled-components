import { styled } from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#0A193B" : "white"};
  color: ${props => props.$primary ? "white" : "#0A193B"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0A193B;
  border-radius: 3px;
  transition: 0.25s;
  min-width: 80px;

  &:hover {
    scale: 1.1;
  }
`;