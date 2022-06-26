import React from "react";

// styles
import { Wrapper } from "./Home.styles";

// components
import Hero from "../herosection/Hero";

// Images
import Download from "../../assets/download.png";
// import Googledoc from "../../assets/googledoc.png";
// import Trip from "../../assets/trip.png";

function Home() {
  return (
    <Wrapper>
      <Hero />

      <main className="d-flex flex-column">
        <section className="d-flex flex-column align-center text-center">
          <img src={Download} alt="" />
          <h3>Download the App</h3>
          <p>
            Get the app from Google playstore or Apple store to get started.
          </p>
        </section>
      </main>
    </Wrapper>
  );
}

export default Home;
