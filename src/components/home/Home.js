import React from "react";

// styles
import { Wrapper } from "./Home.styles";

// components
import Hero from "../herosection/Hero";

// Images
import Download from "../../assets/download.png";
import Googledoc from "../../assets/googledoc.png";
import Trip from "../../assets/trip.png";

function Home() {
  return (
    <Wrapper>
      <Hero />

      <main className=" container d-flex flex-column">
        {/*  Start of download the app section */}
        <section className=" container d-flex flex-column align-center text-center mb-4">
          <img src={Download} alt="" />
          <h3>Download the App</h3>
          <p>
            Get the app from Google playstore or Apple store to get started.
          </p>
        </section>
        {/*  End of download the app section */}
        {/*  Start of download the app section */}
        <section className=" container d-flex flex-column align-center text-center mb-4">
          <img src={Googledoc} alt="" />
          <h3>Sign up</h3>
          <p>Create an account to get you access to Drivers.</p>
        </section>
        {/*  End of download the app section */}
        {/*  Start of download the app section */}
        <section className=" container d-flex flex-column align-center text-center mb-4">
          <img src={Trip} alt="" />
          <h3>Book a Trip</h3>
          <p>
            Book a trip for either a ride or a delivery service to any
            destination.
          </p>
        </section>
        {/*  End of download the app section */}
      </main>
    </Wrapper>
  );
}

export default Home;
