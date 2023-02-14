import Header from "./componets/Header"
import './/App.css'
import { BrowserRouter, Route } from "react-router-dom"
import Item from "./componets/Item"
import Cart from "./componets/Cart"
import Login from "./componets/Login"
import Band from "./componets/Band"
import { useState, useEffect } from 'react';


function App(){
  const [user, setUser] = useState(null);

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
          <Cart />
        </Route>
        <Route path="/item" exact>
          <Item />
        </Route>
      </div>
    </BrowserRouter>
  )
}


export default App