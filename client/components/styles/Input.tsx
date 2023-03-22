import styled from "styled-components";

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--white);
  color: var(--white);
  flex-grow: 1;

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--lightGrey);  
  }
`;