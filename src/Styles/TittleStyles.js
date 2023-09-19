import { styled } from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  
  color: ${(props) => props.theme.main};
`;

Title.defaultProps = {
  theme: {
    main: '#0A195B',
  }
}

export const ColoredTitle = styled(Title)`
  color: ${props => props.$color ? props.$color : "#0A195B"};
`;