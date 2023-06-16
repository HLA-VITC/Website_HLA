import React from "react";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from "./Event";
import { eventData, responsive } from "./eventData";



import Collage from "./Collage";
import About from "./About";
import Team from "./Team";
import Foot from "./Foot";

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
      <Collage />
      <About />
      <Team />
      <div className="event">
      <h1>Our Events</h1>
      <Carousel showDots={false} responsive={responsive}>
        {events}
      </Carousel>
      </div>
      <Foot />
    </div>
  );
}

