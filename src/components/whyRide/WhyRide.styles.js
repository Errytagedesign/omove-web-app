import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  main section img {
    width: 20%;
    margin: 1em auto;
  }
  main section h3 {
    color: var(--main-color);
  }

  main section p {
    color: var(--darkGrey);
    font-size: var(--fontSmall);
  }

  .keke h2 {
    font-size: 1.2rem;
  }

  .keke p {
    color: var(--medGrey);
  }

  .Card {
    box-shadow: 0px 0px 15px 0px #0000001a;
    margin: 2em auto;
  }

  .Card h3 {
    font-size: 1rem;
  }
  .Card p {
    font-size: var(--fontSmall);
    color: var(--medGrey);
  }

  @media screen and (min-width: 768px) {
    main section p {
      color: var(--black);
      font-weight: 700;
    }

    .keke h2 {
      font-size: 2.5rem;
    }

    .keke p {
      color: var(--medGrey);
      font-weight: 700;
    }
  }
`;
