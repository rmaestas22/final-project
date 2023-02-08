import Login from "./Componets/Login"
import About from "./Componets/About";
import Merch from "./Componets/Merch";
import Home from "./Componets/Home"
import Navbar from "./Componets/Navbar";
import { Switch, Route, } from 'react-router-dom'

function App(){
  return(
    <>
      <Navbar />
      <div className="container">
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/merch">
            <Merch />
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