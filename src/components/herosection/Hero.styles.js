import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin: 1em auto;

  /* h2 {
    cursor: pointer;
    color: var(--main-color);
  } */

  section .HImg {
    height: 244px;
    object-fit: cover;
    object-position: top center;
  }

  section h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--black);
  }

  section p {
    font-size: 0.9rem;
    text-align: start;
  }

  @media screen and (min-width: 768px) {
    padding: 0;

    section:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--sec-color);
      padding: 4em;
      align-items: start;
    }

    section .HImg {
      height: auto;
    }
  }

  @media screen and (min-width: 900px) {
    section h2 {
      font-size: 5rem;
      margin-bottom: 1.3em;
    }

    section p {
      font-size: 0.7rem;

      font-weight: 600;
    }
  }
`;
