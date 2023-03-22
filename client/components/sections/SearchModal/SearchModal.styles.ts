import styled from "styled-components";

export const BlurredOverlay = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--darkGreyBlur);
  backdrop-filter: blur(4px);
  z-index: 5;
`;

export const ModalForm = styled.form`
  width: 360px;
  max-width: 90%;
  bottom: 20px;
  left: 50%;
  margin: 0 auto;
  padding: 1.6rem 2.2rem;
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0 0 0 1px var(--darkGreyBlur);
  background-color: var(--darkGrey);
  backdrop-filter: blur(8px);

  label {
    display: flex;
    align-items: center;

    .label-icon {
      margin-right: 10px;
    }

    input {
      flex-grow: 1;
      font-size: 1.4rem;
    }
  }
`;