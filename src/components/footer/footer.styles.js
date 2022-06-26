import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: #393939;
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
  display: flex;
  flex-direction: column;
  padding: 1em;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  color: #fff;

  hr {
    width: 60%;
    border: solid 0.3px #d8d8d8;
  }

  .FooterBrandLogo {
    width: 134px;
    height: 34.18px;
  }

  .footerItems {
    color: #fff;
    padding: 0.8em;
    font-size: 0.7rem;
    font-weight: 900;
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    hr {
      width: 80%;
    }

    .FooterBrandLogo {
      margin: 2em auto;
    }
    .footerItems {
      font-weight: 400;
    }
  }
`;

export const NavBars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 3em auto;

  .Btns {
    background-color: #fff;
  }

  .Btns a {
    color: var(--main-color);
  }

  .navItems {
    color: #fff;
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 0;

    :hover {
      color: var(--sec-color);
    }
  }

  a {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 1em;

    .OrderLogo {
      order: 3;
      display: flex;
      width: 100%;
      margin-top: 2.5em;
      flex-direction: row;
      justify-content: start;
      align-items: start;
    }

    .navItems {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      margin: 1em 0;
    }

    /* .mobileNavhead {

    } */

    button {
      margin: 1.5em 0;
    }
  }

  /* .navItems {
    background: #000;
  } */
`;
