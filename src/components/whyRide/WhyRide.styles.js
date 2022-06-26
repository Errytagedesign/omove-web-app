import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .Ride {
    margin: 2em 0;
  }
  .Ride h4 {
    font-size: 0.8rem;
  }
  .Ride p {
    font-size: 0.6rem;
    color: var(--medGrey);
    line-height: 18px;
    margin-bottom: 0;
  }

  /* .Ride img {
    height: 150px;
  } */

  @media screen and (min-width: 768px) {
    .Ride h4 {
      font-size: 1.4rem;
      font-weight: 700;
    }

    .Ride p {
      font-size: 0.9rem;
      line-height: 23px;
      color: var(--medGrey);
      font-weight: 700;
    }
  }
`;
