import React from "react";

export default function Event(props) {
  return (

    <div className="card" id='event'>

      <img className="event--image" src={props.url} style={{width: 250, height: 250}} alt="event image" />
      <h2>{props.name}</h2>
      <p className="date">{props.date}</p>
      <p>{props.description}</p>
      <p>
        <button> <a href='https://www.instagram.com/hla_vitc/?hl=en'>Know More</a> </button>
      </p>
    </div>
  );
}
