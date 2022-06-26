import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin: 1em auto;

  /* h2 {
    cursor: pointer;
    color: var(--main-color);
  } */

  .HImg {
    height: 244px;
    object-fit: cover;
    object-position: top center;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--black);
  }

  p {
    font-size: 0.9rem;
    text-align: start;
  }

  @media screen and (min-width: 768px) {
    section:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--sec-color);
      padding: 4em;
      align-items: start;
    }

    .HImg {
      height: auto;
    }
  }

  @media screen and (min-width: 900px) {
    h2 {
      font-size: 3.2rem;
      margin-bottom: 1.3em;
    }

    p {
      font-size: 0.7rem;

      font-weight: 600;
    }
  }
`;
