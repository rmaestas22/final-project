import React from "react";

function MerchCard({ merch, handleClick }) {
  const { name, image, size, price } = merch;


  return (
    <div className="card">
      <img src={image} alt={name} className="band-image" />
      <h2>{name}</h2>
      <h2>{size}</h2>
      <h2>{price}</h2>
      <button onClick={()=>handleClick(merch)}>Add to Cart</button>
    </div>
  );
}

export default MerchCard;