import { useState, useEffect } from 'react';
import Login from "./Componets/LoginForm"
import About from "./Componets/About";
import Cart from "./Componets/Cart";
import Home from "./Componets/Home"
import Navbar from "./Componets/Navbar";
import { Switch, Route, } from 'react-router-dom'


function App(){
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  if (!user) return <Login onLogin={setUser} />

  return(
    <>
      <Navbar />
      <div className="container">
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/cart">
            <Cart />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          </Switch>
      </div>
    </>
  )
}


export default App