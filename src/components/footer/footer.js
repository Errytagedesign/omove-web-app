import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Wrapper, Content } from "./footer.styles";

function Footer() {
  return (
    <Wrapper>
      <Content>
        <section>
          {" "}
          <small> created with love by errytage </small>{" "}
        </section>
        <section>
          <h3> Contact us: </h3>
          <Link href="mailto: errytage@gmail.com">errytage@gmail.com ||</Link>
          <Link href="tel: +2348095342136">08095342136</Link>
        </section>
      </Content>
    </Wrapper>
  );
}

export default Footer;
