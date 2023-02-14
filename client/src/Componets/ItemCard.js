import React, { useState } from "react";


function ItemCard({ item, onAddToCart, onRemoveFromCart }) {
  const {id,  name, image, size, price, cart } = item;
  const [inCart, setInCart] = useState(cart)




    function handleCartChange() {
      setInCart((inCart) => !inCart);
      fetch(`/items/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, image, size, price })
      })
        .then((r) => r.json())
        .then((addedToCart) => setInCart ? onAddToCart(addedToCart) : onRemoveFromCart(addedToCart))
    }

    return (
      <div className="card" style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", textAlign: "center", width: "40vw", height: "65vh", border: "10px solid", borderColor: "maroon", margin: "50px", backgroundColor: "white" }}>
        <img style={{ height: "70%", width: "90%" }} src={image} alt={name} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h4 style={{ fontSize: "19px" }}>{name}</h4>
          <p><b>Price:</b> {price}</p>
        </div>
        <div style={{ margin: "5px" }}>
          {inCart ? (
            <button onClick={handleCartChange}>Remove From Cart</button>
          ) : (<button onClick={handleCartChange}>Add To Cart</button>)}
        </div>
      </div>
      );
}

export default ItemCard;
