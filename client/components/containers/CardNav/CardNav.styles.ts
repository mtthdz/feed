import styled from "styled-components";

export const CardNavStyles = styled.nav`
  margin-top: 2px;

  ul {
    display: flex;

    li {
      margin-right: 10px;
      color: var(--lightGrey);
      font-size: 1.2rem;

      &>* {
        margin: 0;
        padding: 0;
        color: var(--lightGrey);
        font-size: 1.2rem;
      }

      &>*:hover,
      &>*:focus {
        text-decoration: underline;
      }
    }
  }

  @media(max-width: 400px) {
    ul {
      flex-wrap: wrap;

      li {
        margin-right: 6px;
      }
    }
  }
`;