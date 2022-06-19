import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background: var(--medGrey);
  align-items: center;
  justify-content: space-around;

  /* 
  :hover {
    box-shadow: 4px 15px 18px 1px rgba(0, 0, 0, 0.3);
    border: solid var(--medGrey) 2px;
    border-radius: 5px;
  } */
`;

export const Content = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  section {
    display: flex;
    padding: 1em;
    justify-content: space-between;
  }

  small,
  a {
    color: var(--sec-color);
  }
`;
