import React from "react";
import { Wrapper } from "./WhyRide.styles";

function WhyRide({ title, desc, image }) {
  return (
    <Wrapper>
      <article className="Ride d-flex flex-row justify-content-between align-items-center ">
        <div className="d-flex flex-column col-5 ">
          {" "}
          <img className="col-12" src={image} alt="" />
        </div>
        <section className="col-7 ms-3 ">
          <h4>{title}</h4>
          <p>{desc}</p>
        </section>
      </article>
    </Wrapper>
  );
}

export default WhyRide;
