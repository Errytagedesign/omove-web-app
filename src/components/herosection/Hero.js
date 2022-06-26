import React from "react";

// Styles
import { Wrapper, Content } from "./Hero.styles";

// Images
import HeroImage from "../../assets/Omove-Hero-section-imge.jpg";
import Playstore from "../../assets/Playstore.png";
import Appstore from "../../assets/Appstore.png";

function Hero() {
  return (
    <Wrapper>
      <Content>
        <section className="container  d-flex flex-column flex-md-row ">
          <section className="col-12 col-md-6 order-md-2 ">
            {" "}
            <img
              className=" col-12 HImg"
              src={HeroImage}
              alt="Omove hero section"
            />{" "}
          </section>
          <section className="col-12 col-md-6">
            <h2 className="text-start mt-4">Book a keke to your destination</h2>

            <p className="text-start mt-2">
              Download the Omove app to get started today.
            </p>

            <section className="d-flex flex-row align-items start">
              <img className="col-5" src={Playstore} alt="" />
              <img className="col-5 ms-3" src={Appstore} alt="" />
            </section>
          </section>
        </section>
      </Content>
    </Wrapper>
  );
}

export default Hero;
