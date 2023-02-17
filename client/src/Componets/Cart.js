import React, { useState, useEffect } from 'react'
import ItemCard from "./ItemCard";
import useCartStore from '../hooks/cartStore';

// function Cart(){
//   const {cart, setCart} = useCartStore()
//   console.log(cart)

//   return (
//     <div>
//       <p>current cart number: {cart}</p>
//       <form onSubmit={(e) =>
//         setCart(e.target.cartid.value)}>
//         <label>update cart number:</label>
//         <input type="number" name='cartid' placeholder={cart}></input>

//       </form>
//     </div>
//   )
// }

// console.log(cart)

// return(
//   <div>
//     <p>current cart number: {cart}</p>
//     <form  onSubmit={(e)=>
//     setCart(e.target.cartid.value)}>
//       <label>update cart number:</label>
//       <input type="number" name='cartid' placeholder={cart}></input>

//     </form>
//   </div>
// )

function Cart({ onRemovefromCart, OnAddToCart}){

  // const inCart = items?.filter((item)=> item.cart)
    const {cart} = useCartStore()
    const [items, setItems] = useState([])


  useEffect(() => {
    fetch(`/cart/${cart}`)
      .then((r) => r.json())
      .then(data => {
        console.log(data)
        setItems(data.items)
      });
  }, []);


  function deleteCart(){
    fetch(`/cart/${cart}`, {
      method: "DELETE",
    }).then(

    );

  }




  console.log(items)
  const allItems = items?.map((item) => (
      <ItemCard key={item.id} item={item} onRemoveFromCart={onRemovefromCart}  />
  ))



  return (
    <div>
      <h1 className=' cartTitle'>Items In Cart</h1>
      <div className='itemsInCart'>{allItems}</div>
      <p>current cart number: {cart}</p>
    {/* <form  onSubmit={(e)=>
    setCart(e.target.cartid.value)}> */}
      {/* <label>update cart number:</label>
      <input type="number" name='cartid' placeholder={cart}></input> */}
      <button onClick={deleteCart}> DELETE CART </button>
    {/* </form> */}
    </div>
  )
}




export default Cart