import React from "react";

export default function Event(props) {
  return (
    <div className="card">
      <img className="event--image" src={props.url} alt="event image" />
      <h2>{props.name}</h2>
      <p className="date">{props.date}</p>
      <p>{props.description}</p>
      <p>
        <button>Know More</button>
      </p>
    </div>
  );
}
