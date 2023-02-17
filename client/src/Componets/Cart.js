import React from 'react'
import ItemCard from "./ItemCard";

function Cart({items, onRemovefromCart, OnAddToCart}){

  const inCart = items?.filter((item)=> item.cart)

  

  console.log(items)
  const allItems = inCart?.map((item) => (
      <ItemCard key={item.id} item={item} onRemoveFromCart={onRemovefromCart} onAddToCart={OnAddToCart} />
  ))



  return (
    <div>
      <h1 className=' cartTitle'>Items In Cart</h1>
      <div className='itemsInCart'>{allItems}</div>
    </div>
  )
}




export default Cart