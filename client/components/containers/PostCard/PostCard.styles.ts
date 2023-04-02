import styled from "styled-components";

export const CardContainer = styled.li`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 1.2rem 2rem;

  &:hover,
  &:focus {
    background-color: var(--darkGrey);
  }

  .card-index {
    margin-right: 10px;
    width: 20px;
    display: flex;
    justify-content: flex-end;
    flex: 0 0 20px;
  }

  .card-main {
    flex-grow: 1;
  }

  @media(max-width: 400px) {
    padding: 1.2rem 0rem;

    .card-main {
      .card-title {
        font-size: 1.4rem;
      }
    }
  }
`;

export const CardTitle = styled.a`
  font-weight: 500;
  font-size: 1.6rem;

  .card-title-ref {
    margin-left: 8px;
    font-weight: 300;
    font-size: 1.0rem;
    color: var(--lightGrey);

    &:hover span,
    &:focus span {
      text-decoration: underline;
    }
  }
`;