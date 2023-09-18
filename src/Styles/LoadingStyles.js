import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingDisplay = styled.div`
  border: 10px solid lightgrey;
  border-top: 10px solid #0A195B;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  animation: ${rotate} .75s linear infinite;
`;