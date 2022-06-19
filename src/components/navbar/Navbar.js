import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BsMenuButtonWide, BsXLg } from "react-icons/bs";

// Styles
import { Wrapper, Content, NavBars } from "./Navbar.styles";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const ShowNavbar = () => {
    setNavbar(!navbar);
    console.log("clicked");
  };

  return (
    <Wrapper>
      <Content>
        <Link to="#">
          <h2>Realtor</h2>
        </Link>
        <NavBars navbar={navbar}>
          <Link to="#">
            <div className="navItems">Home</div>
          </Link>
          <Link to="#">
            <div className="navItems">Search</div>
          </Link>
          <Link to="#">
            <div className="navItems">Buy Property</div>
          </Link>
          <Link to="#">
            <div className="navItems">Rent property</div>
          </Link>
          <BsXLg className="closeMenu " onClick={ShowNavbar} />
        </NavBars>
        <main>
          <BsMenuButtonWide className="menuIcon" onClick={ShowNavbar} />
        </main>
      </Content>
    </Wrapper>
  );
}

export default Navbar;
