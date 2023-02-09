import React from "react";

function MerchCard({ merch }) {
  const { name, image, size, price } = merch;


  return (
    <div className="card">
      <img src={image} alt={name} className="band-image" />
      <h2>{name}</h2>
      <h2>{size}</h2>
      <h2>{price}</h2>
    </div>
  );
}

export default MerchCard;