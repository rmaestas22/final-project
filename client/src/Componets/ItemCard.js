import React, { useState } from "react";


function ItemCard({ item, onAddToCart, onRemoveFromCart }) {
  const {id, name, image, size, price, cart } = item;
  const [inCart, setInCart] = useState(false);




  // fetch(`/orderables`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     cart_id:
  //     item_id: item.id,
  //     quantity: 1
  //   })
  // })


    function handleCartChange() {
      setInCart((inCart) => !inCart);
      fetch(`/cart/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart: !cart })
      })
        .then((r) => r.json())
        .then((addedToCart) => setInCart ? onAddToCart(addedToCart) : onRemoveFromCart(addedToCart))
    }

    return (
      <div className="card"
      style={{
      color: "white",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      textEmphasisColor: "white",
      width: "40vw",
      height: "80vh",
      border: "10px solid",
      borderColor: "maroon",
      margin: "50px",
      backgroundColor: "maroon" }}>
        <img style={{ height: "70%", width: "90%" }} src={image} alt={name} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h4 style={{ fontSize: "19px" }}>{name}</h4>
          <h6 style={{ fontSize: "8px" }}>{size}</h6>
          <p><b>Price:</b> {price}</p>
        </div>
        <div style={{ margin: "5px" }}></div>
        {inCart ? (
          <button onClick={handleCartChange}>Remove From Cart</button>
        ) : (<button onClick={handleCartChange}>Add To Cart</button>)}
      </div>
      );
}

export default ItemCard;
