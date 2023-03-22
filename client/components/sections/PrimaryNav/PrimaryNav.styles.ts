import styled from "styled-components";

export const BlurredContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  max-width: 90%;
  position: fixed;
  bottom: 20px;
  left: 50%;
  margin: 0 auto;
  padding: 0.8rem 2.2rem;
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0 0 0 1px var(--lightGreyBlur);
  background-color: var(--darkGreyBlur);
  backdrop-filter: blur(8px);
  transform: translate(-50%, 0);
  z-index: 10;

  .site-title {
    width: 15%;
    font-weight: 500;
    font-size: 1.6rem;
  }

  a {
    padding: 2px;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;

    li {
      margin: 0 0.5rem;
      display: flex;
      align-items: center;
    }
  
    li:last-child {
      margin-right: 0;
    }
  }

`;