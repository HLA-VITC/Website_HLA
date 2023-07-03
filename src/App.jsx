import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from "./Event";
import { eventData, responsive } from "./eventData";

import Navbar from "./Navbar";
import Backimg from "./Backimg";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer.js";


export default function App() {
  const events = eventData.map((item) => (
    <Event
      name={item.name}
      url={item.imageurl}
      date={item.date}
      description={item.description}
    />
    ));

  return (
    <div>
      <Navbar/>
      <Backimg/>
      <About/>
      <Team />
      <div className="event">
      <h1>Our Events</h1>
      <Carousel showDots={false} responsive={responsive}>
        {events}
      </Carousel>
      </div>
      <Footer />
    </div>
  );
}

