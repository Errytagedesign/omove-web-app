import React from "react";
import { Wrapper } from "./WhyRide.styles";

function WhyRide({ title, desc, image }) {
  return (
    <Wrapper>
      <article className="Ride d-flex flex-row align-items-center ">
        <div className="col-4">
          {" "}
          <img className="col-12" src={image} alt="" />
        </div>
        <section className="mx-auto col-6 ms-4  align-items-center">
          <h4>{title}</h4>
          <p>{desc}</p>
        </section>
      </article>
    </Wrapper>
  );
}

export default WhyRide;
