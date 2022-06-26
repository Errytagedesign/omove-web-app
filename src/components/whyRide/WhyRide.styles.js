import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .Ride {
    margin: 2em auto;
  }
  .Ride h4 {
    font-size: 0.8rem;
  }
  .Ride p {
    font-size: 0.6rem;
    color: var(--medGrey);
    line-height: 18px;
  }

  .Ride img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    main section p {
      color: var(--black);
      font-weight: 700;
    }

    .Ride p {
      color: var(--medGrey);
      font-weight: 700;
    }
  }
`;
