import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"

interface Props {
  modalToggle: () => void;
}

export default function SearchModal({ modalToggle }: Props) {
  return (
    <OverlayStyles onClick={() => modalToggle()}>
      <ModalStyles
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => e.preventDefault()}
      >
        <label>
          <FontAwesomeIcon className="label-icon" icon={faSearch} />
          <input type="text" name="search" />
        </label>
      </ModalStyles>
    </OverlayStyles>
  )
}

const OverlayStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1e1e1e30;
  backdrop-filter: blur(4px);
  z-index: 5;
`;

const ModalStyles = styled.form`
  width: 360px;
  max-width: 90%;
  bottom: 20px;
  left: 50%;
  margin: 0 auto;
  padding: 1.6rem 2.2rem;
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0 0 0 1px #1e1e1e40;
  background-color: #1e1e1e;
  backdrop-filter: blur(8px);

  label {
    display: flex;
    align-items: center;

    .label-icon {
      margin-right: 10px;
    }

    input {
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
    }
  }
`;