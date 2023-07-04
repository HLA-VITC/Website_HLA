import React from "react";

export default function Team(props) {
  return (
    <div
      id='team'
      className="teamCard"
      style={{
        backgroundColor: "#FFF3E2",
        borderRadius: 20,
        padding: 20,
        margin: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: 20,
          paddingBottom: 20,
        }}
      >
        <img
          style={{ borderRadius: "100%", height: 100 }}
          src={props.image}
          alt="profile"
        />
        <p style={{ fontSize: 40, alignContent: "right" }}>{props.name}</p>
      </div>
      <p>{props.description}</p>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          marginTop: 10,
          alignContent: "center",
        }}
      >
        <a
          href={props.link}
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            padding: 10,
            borderRadius: 10,
            textAlign: "center",
            width: "30%",
            marginTop: 20,
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
}

// return (
//   <div style={{ backgroundColor: "#FA9884", padding: 10 }}>

//     <div
//       style={{
//         display: "flex",
//         margin: 5,
//         gap: 200,
//         justifyContent: "center",
//       }}
//     >
//       {team.map((member) => teamsCard(member))}
//     </div>
//   </div>
// );
