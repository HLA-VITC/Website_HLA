import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Event from "./Event";
import { eventData, responsive } from "./eventData";
import { teamData, teamResponsive } from "./teamData";

import Navbar from "./Navbar";
import Backimg from "./Backimg";
import About from "./About";
import Team from "./Team";
import Footer from "./Footer.js";
import "./App.css";

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

      {/* Team Section */}
      <div
        className="event"
        style={{ padding: 20, backgroundColor: "#FA9884" }}
      >
        <h2 className="Team_Title">Our Team</h2>
        <Carousel
          showDots={false}
          responsive={teamResponsive}
          style={{ display: "flex", gap: 50, padding: 20 }}
        >
          {teams}
        </Carousel>
      </div>

      {/* Events section */}
      <div
        className="event"
        style={{ paddingTop: 100, padding: 10, paddingBottom: 50 }}
      >
        <h1 style={{ marginBottom: 50 }}>Our Events</h1>
        <Carousel
          showDots={false}
          responsive={responsive}
          style={{ display: "flex", gap: 50, padding: 20 }}
        >
          {events}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
