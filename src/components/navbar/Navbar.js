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
      <Content className="container">
        <section className="d-flex col-8 col-lg-3 align-items-start">
          <Link to="#">
            <img className="BrandLogo" src={BrandLogo} alt="Omove brand logo" />
          </Link>
        </section>
        <NavBars className="" navbar={navbar}>
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
          <section className="d-flex flex-column flex-lg-row justify-content-between col-12 col-lg-4 p-2 ">
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
          <section className="col-12 col-lg-3">
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
