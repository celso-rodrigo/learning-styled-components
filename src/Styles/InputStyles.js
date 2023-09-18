import { styled } from "styled-components";

export const Input = styled.input.attrs({
  // Defining default attributes
  type: "text",
})`
  font-size: 1em;
  padding: 0.25em;
  border: 2px solid #0A193B;
  border-radius: 3px;
  width: 75px;
  text-align: center;
`;

// Overrides Attrs
export const PasswordInput = styled(Input).attrs({
  type: "password",
})``;