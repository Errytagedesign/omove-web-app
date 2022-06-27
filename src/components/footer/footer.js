import React from "react";
import { Link } from "react-router-dom";

import FooterLogo from "../../assets/Omove-Footer-Logo.png";

// Styles
import { Wrapper, Content, NavBars } from "./footer.styles";

function Footer() {
  return (
    <Wrapper>
      <Content className="container">
        <NavBars>
          <section className="OrderLogo">
            <Link to="#">
              <img
                className="FooterBrandLogo"
                src={FooterLogo}
                alt="Omove brand logo"
              />
            </Link>
          </section>
          {/* Nav Items */}
          <section className="d-flex flex-row col-12 col-md-4 justify-content-between ">
            <Link to="#">
              <h3 className="navItems ">About</h3>
            </Link>
            <Link to="#">
              <h3 className="navItems ">Contact</h3>
            </Link>
            <Link to="#">
              <h3 className="navItems ">Become a driver</h3>
            </Link>
          </section>
          <section className=" col-12 col-md-3 ">
            {" "}
            <button className="Btns">
              {" "}
              <Link to="#"> Book Now </Link>
            </button>
          </section>
        </NavBars>
        <hr />

        <footer className="d-flex p-2 mt-4 ">
          <h3 className="footerItems "> Terms & Services</h3>
          <h3 className="footerItems "> Terms & Services</h3>
        </footer>
        <footer className="mb-5 pb-5">
          <h3 className="footerItems ">
            {" "}
            Copyright © 2020 Opay Limited. All rights reserved
          </h3>
        </footer>
      </Content>
    </Wrapper>
  );
}

export default Footer;
