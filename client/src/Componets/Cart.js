import React from 'react'
import ItemCard from "./ItemCard";
import { useContext } from 'react';
import {ItemsContext } from '../context/ItemsProvider';
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";









function Cart({ onRemovefromCart, OnAddToCart}){
  const inCart = items?.filter((item)=> item.cart)
  const {items, setItems} = useContext(ItemsContext)

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