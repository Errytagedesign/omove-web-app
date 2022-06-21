import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { BsXLg } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

// Styles
import { Wrapper, Content, NavBars } from "./Navbar.styles";

// Images
import BrandLogo from "../../assets/OmoveLogo.png";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const ShowNavbar = () => {
    setNavbar(!navbar);
    console.log("clicked");
  };

  return (
    <Wrapper>
      <Content>
        <section className="col-3 align-items-start">
          <Link to="#">
            <img className="BrandLogo" src={BrandLogo} alt="Omove brand logo" />
          </Link>
        </section>
        <NavBars className="col-12 col-md-8" navbar={navbar}>
          {/* Mobile Logo and Close menu icon */}
          <section className="d-flex w-sm-100 justify-content-between mb-5">
            <Link to="#">
              <img
                className="mobileNavLogo"
                src={BrandLogo}
                alt="Omove brand logo"
              />
            </Link>
            <BsXLg className="closeMenu " onClick={ShowNavbar} />
          </section>

          {/* Nav Items */}
          <section className="d-flex flex-column flex-lg-row justify-content-between col-12 col-lg-6 p-2 ">
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
          <section className="col-12 col-lg-6 ">
            {" "}
            <button className="Btns">
              {" "}
              <Link to="#"> Book Now </Link>
            </button>
          </section>
        </NavBars>
        <main>
          <BiMenu className="menuIcon" onClick={ShowNavbar} />
        </main>
      </Content>
    </Wrapper>
  );
}

export default Navbar;
