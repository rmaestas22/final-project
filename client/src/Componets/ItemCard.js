import React, { useState } from "react";
import useCartStore from "../hooks/cartStore"



function ItemCard({ item, onAddToCart, onRemoveFromCart }) {
  const {id, name, image, size, price } = item;
  const [inCart, setInCart] = useState(false);
  const { cart } = useCartStore()

  console.log(cart)







    function handleCartChange() {
      setInCart((inCart) => !inCart);
      fetch(`/orderables`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart_id: cart,
          item_id: id,
          quantity: 1
        })
      }).then(response => response.json())
      .then(data => console.log(data))
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


// fetch(`/items/${id}}`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ cart: !cart })
// })
//   .then((r) => r.json())
//   .then((addedToCart) => setInCart ? onAddToCart(addedToCart) : onRemoveFromCart(addedToCart))