import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background: var(--main-color);
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

  h2 {
    cursor: pointer;
    color: var(--main-color);
  }

  .menuIcon {
    color: #fff;
    font-weight: 700;
    font-size: var(--fontBig);
    cursor: pointer;
    visibility: hidden;
  }

  @media screen and (max-width: 768px) {
    .menuIcon {
      visibility: visible;
    }
  }
`;

export const NavBars = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  cursor: pointer;

  .navItems {
    color: #fff;
    padding: 1em;
    text-transform: uppercase;
    font-weight: 600;
  }
  .closeMenu {
    color: #fff;
    font-weight: 700;
    font-size: var(--fontBig);
    cursor: pointer;
    visibility: hidden;
  }

  @media screen and (max-width: 768px) {
    .closeMenu {
      position: absolute;
      left: 70%;
      visibility: visible;
    }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    top: ${({ navbar }) => (navbar ? "0" : "-100%")};
    /* top: -100%; */
    left: 0;
    /* right: 0; */
    flex-direction: column;
    background: var(--main-color);
    padding: 1.5em;
    transition: 350ms;
    z-index: 200;
  }

  .navItems {
    background: var(--gradient);
  }
`;
