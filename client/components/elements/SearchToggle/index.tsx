import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faSearch } from "@fortawesome/pro-light-svg-icons";

export default function SearchToggle() {
  return (
    <ButtonStyles
      type='button'
      onClick={() => console.log('lol')}
    >
      Search
    </ButtonStyles>
  )
}

const ButtonStyles = styled.button`
  background: none;
  border: none;
  color: var(--white);
  padding: 2px;
  font-weight: 300;

  &:hover,
  &:focus {
    color: var(--lightGrey);
    cursor: pointer;
    border: none;
  }
`;