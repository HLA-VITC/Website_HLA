import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from "./Event";
import { eventData, responsive } from "./eventData";
import { teamData } from "./teamData";

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

  const teams = teamData.map((teamMember) => (
    <Team
      key={teamMember.id}
      name={teamMember.name}
      image={teamMember.image}
      description={teamMember.description}
      link={teamMember.link}
    />
  ));

  return (
    <div>
      <Navbar />
      <Backimg />
      <About />
      {/* <Team /> */}
      <div className="event" style={{ padding: 20 }}>
        <h1 style={{ color: "white" }}>Our Team</h1>
        <Carousel
          showDots={false}
          responsive={responsive}
          style={{ display: "flex", gap: 50, padding: 20 }}
        >
          {teams}
        </Carousel>

        {/* Events section */}
        <h1 style={{ color: "white", marginTop: 100 }}>Our Events</h1>
        <Carousel showDots={false} responsive={responsive}>
          {events}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
