import React from "react";

function BandCard({ band }) {
  const { name, image, instrument } = band;


  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", width: "40vw", height: "65vh", border: "10px solid", borderColor: "black", margin: "50px", backgroundColor: "white" }}>
      <img style={{ height: "60%", width: "60%" }} src={image} alt={name} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h4 style={{ fontSize: "19px" }}>{name}</h4>
       <h4>{instrument}</h4>
      </div>
    </div>
  );


  // return (
  //   <div className="card">
  //     <h2>{name}</h2>
  //     <h2>{instrument}</h2>
  //     <img src={image} alt={name} className="band-image" />
  //   </div>
  // );
}

export default BandCard;