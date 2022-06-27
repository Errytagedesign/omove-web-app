import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .DownloadApp section img {
    width: 70px;
    margin: 0.5em auto;
    padding: 0.5em;
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

  .store img {
    width: 30%;

    margin: 1.5em 0;
  }

  .MobilePhone {
    position: relative;
    align-items: center;

    overflow: hidden;

    margin: 0 auto;
  }

  .MobilePhone img {
    width: 280px;
    height: 240px;
    object-fit: cover;
    object-position: top center;
    text-align: center;
  }

  .Support section img {
    width: 70px;
  }

  .Support h4 {
    font-size: 1.1rem;
  }
  .Support p {
    font-size: 0.7rem;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    main section p {
      color: var(--black);
      font-weight: 700;
    }

    .keke h2 {
      font-size: 2.5rem;
    }

    .Support p,
    .keke p {
      color: var(--medGrey);
      font-weight: 700;
    }
  }
`;
