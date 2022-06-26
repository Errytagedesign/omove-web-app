import React from "react";

// styles
import { Wrapper } from "./Home.styles";

// components
import Hero from "../herosection/Hero";

// Images
import Download from "../../assets/download.png";
import Googledoc from "../../assets/googledoc.png";
import Trip from "../../assets/trip.png";
import Delivery from "../../assets/Omove-Del-Services.jpg";
import Hailing from "../../assets/Omove-Ride-hailing.jpeg";
import WhyRide from "../whyRide/WhyRide";
import { WhyRideData } from "../whyRide/WhyRideData";
import Playstore from "../../assets/Playstore.png";
import Appstore from "../../assets/Appstore.png";

function Home() {
  return (
    <Wrapper>
      <Hero />

      <main className=" container d-flex flex-column">
        {/*  Start of download the app section */}
        <main className=" container d-flex flex-column flex-md-row mt-5">
          <section className=" container d-flex flex-column align-center text-center mb-4 col-12 col-md-3 ">
            <img src={Download} alt="" />
            <h3>Download the App</h3>
            <p>
              Get the app from Google playstore or Apple store to get started.
            </p>
          </section>
          {/*  End of download the app section */}
          {/*  Start of download the app section */}
          <section className=" container d-flex flex-column align-center text-center mb-4 col-12 col-md-3">
            <img src={Googledoc} alt="" />
            <h3>Sign up</h3>
            <p>Create an account to get you access to Drivers.</p>
          </section>
          {/*  End of download the app section */}
          {/*  Start of download the app section */}
          <section className=" container d-flex flex-column align-center text-center mb-4 col-12 col-md-3">
            <img src={Trip} alt="" />
            <h3>Book a Trip</h3>
            <p>
              Book a trip for either a ride or a delivery service to any
              destination.
            </p>
          </section>
        </main>
        {/*  End of download the app section */}

        {/* Start of Keke for any occassion */}
        <section className=" mt-5 keke container d-flex flex-column align-center text-center mb-4">
          {" "}
          <h2> A Keke For Every Occassion</h2>{" "}
          <p>Omove offers amazing services</p>
        </section>

        <main className=" mx-auto col-12 col-md-8 d-flex flex-column flex-md-row justify-content-around">
          <article className="Card col-12 col-md-5  ">
            <img className="col-12" src={Delivery} alt="" />
            <section className="p-4">
              <h3>Omove Delivery Service</h3>
              <p>
                Deliver goods to any destination you want at an affordable
                price.
              </p>
            </section>
          </article>
          <article className="Card col-12 col-md-5">
            <img className="col-12" src={Hailing} alt="" />
            <section className="p-4">
              <h3>Omove Taxi</h3>
              <p>
                The perfect way to get through your everyday travel needs. City
                taxis are available 24/7 and you can book and travel in an
                instant.
              </p>
            </section>
          </article>
        </main>
        {/* End of Keke for any occassion */}
        {/* Start of Why Ride with Omove*/}
        <main>
          <section className=" mt-5 keke container d-flex flex-column align-center text-center mb-4">
            {" "}
            <h2> Why Ride With Omove</h2>{" "}
            <p>The best way to travel to your destination</p>
          </section>

          <main className="d-flex flex-wrap justify-content-between">
            {WhyRideData.map((ride) => (
              <article className="col-12 col-md-5">
                <WhyRide
                  key={ride.id}
                  title={ride.title}
                  desc={ride.desc}
                  image={ride.imgSrc}
                />
              </article>
            ))}
          </main>
        </main>
        {/* End of Why Ride with Omove*/}
        {/* Start of book a trip*/}
        <section className=" mt-5 keke container d-flex flex-column align-center text-center mb-4">
          {" "}
          <h2> Book a delivery or trip from the app</h2>{" "}
          <p>Download the app for great deals and ease of movement</p>
        </section>
        {/* End of book a trip*/}
      </main>
    </Wrapper>
  );
}

export default Home;
