import styled from "styled-components";

export const SButton = styled.button`
  border: none;
  padding: 2px;
  background: none;
  color: var(--white);
  font-family: 'Source_Sans_3', sans-serif;
  font-weight: 300;    
  font-size: 1.4rem;

  &:hover,
  &:focus {
    border: none;
    color: var(--lightGrey);
    cursor: pointer;
  }
`