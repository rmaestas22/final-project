import React, { useState, useEffect } from 'react'
import Header from "./componets/Header"
import Cart from "./componets/Cart"
import { Route, BrowserRouter } from "react-router-dom";
import './/App.css'
import Login from "./componets/Login"
import Band from "./componets/Band"
import SignUpForm from "./componets/SignUpForm"
import Item from './componets/Item';



function App(){
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);


  function handleAddToCart(addItemToCart) {
    const itemsInCart = items.map((item) => {
      if (item.id === addItemToCart.id) {
        return addItemToCart;
      } else {
        return item;
      }
    })
    setItems(itemsInCart);
  }

  function handleRemoveCart(removeItemFromCart) {
    const removeItem = items.filter((item) => item.id !== removeItemFromCart.id);
    setItems(removeItem)

  }


  useEffect(() => {
    fetch('/items')
      .then((r) => r.json())
      .then((items) => setItems(items))
  }, [])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  if (!user) return <Login onLogin={setUser} />











  return(
    <BrowserRouter>

      <Header user={user} setUser={setUser} />

      <div className="App">
        <Route path="/" exact>
          <Band />
        </Route>

        <Route path="/cart" exact>
          <Cart items={items}
            onRemoveFromCart={handleRemoveCart} onAddToCart={handleAddToCart} />
        </Route>

        <Route path="/item" exact>
          <Item onAddToCart={handleAddToCart} />
        </Route>

        <Route path="/me" exact>
          < SignUpForm />
        </Route>

      </div>

    </BrowserRouter>
  )
}


export default App