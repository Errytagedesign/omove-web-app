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
    color: var(--medgrey);
    font-size: 1rem;
  }
`;
