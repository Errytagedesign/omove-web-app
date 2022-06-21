import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: space-around;

  /* 
  :hover {
    box-shadow: 4px 15px 18px 1px rgba(0, 0, 0, 0.3);
    border: solid var(--medGrey) 2px;
    border-radius: 5px;
  } */

  .BrandLogo {
    width: 120px;
    height: 34.18px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0.5em;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  margin: 1em auto;

  /* h2 {
    cursor: pointer;
    color: var(--main-color);
  } */

  .menuIcon {
    color: var(--black);
    font-weight: 700;
    font-size: var(--fontSuperBig);
    cursor: pointer;
    display: none;
  }

  @media screen and (max-width: 768px) {
    .menuIcon {
      display: block;
      :hover {
        transform: rotate(90deg);
      }
    }
  }
`;

export const NavBars = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
  /* align-items: center; */
  cursor: pointer;

  .navItems {
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 0;

    :hover {
      color: var(--main-color);
      box-shadow: 0px 24px 48px rgba(27, 44, 193, 0.1);
    }
  }

  .mobileNavLogo {
    display: none;
  }

  .closeMenu {
    font-weight: 700;
    font-size: var(--fontBig);
    cursor: pointer;
    display: none;
  }

  a {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    text-align: left;
    width: 100%;
    top: ${({ navbar }) => (navbar ? "0" : "-100%")};
    /* top: -100%; */
    left: 0;
    /* right: 0; */
    flex-direction: column;
    background: #fff;
    border: solid 1px red;
    padding: 2.5em;
    transition: 350ms;
    z-index: 200;
    padding-bottom: 5em;

    .navItems {
      font-size: 1.15rem;
      font-weight: 400;
      margin: 1em 0;

      :hover {
        background: var(--main-color);
        padding: 1em;
        color: #fff;
        width: 100%;
      }
    }

    /* .mobileNavhead {

    } */
    .closeMenu {
      display: block;
      color: var(--black);
    }
    .mobileNavLogo {
      display: block;
      width: 70%;
    }

    button {
      margin: 1.5em 0;
    }
  }

  /* .navItems {
    background: #000;
  } */
`;
