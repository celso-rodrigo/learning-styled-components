import { styled } from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #0A195B;
  font-family: 'Ubuntu', sans-serif;
`;

export const ColoredTitle = styled(Title)`
  color: ${props => props.$color ? props.$color : "#0A195B"};
`;