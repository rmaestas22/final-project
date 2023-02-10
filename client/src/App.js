import { useState, useEffect } from 'react';
import Merch from "./Componets/Merch"
import Login from "./Componets/Login"
import Cart from "./Componets/Cart";
import Navbar from "./Componets/Navbar";
import { Switch, Route, } from 'react-router-dom'
import BandMembersList from './Componets/BandMembersList';


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
    <div>
      <Navbar user={user} setUser={setUser} />

          <Switch>
            <Route exact path="/">
            <BandMembersList />
            </Route>
            <Route exact path="/cart">
            <Cart />
            </Route>
            <Route exact path="/merch">
            <Merch />
            </Route>
          </Switch>

    </div>
  )
}


export default App