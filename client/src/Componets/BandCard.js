import React from "react";

function BandCard({band }) {
  const {  name, image, instrument } = band;


  return (
    <div className="card">
      <h2>{name}</h2>
      <h2>{instrument}</h2>
      <img src={image} alt={name} className="band-image" />
    </div>
  );
}

export default BandCard;