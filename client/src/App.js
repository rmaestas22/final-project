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
            <Route exact path="/" element={<Home />} />
            <Route exact path="/merch" element={<Merch />} />
            <Route exact path="/about" element={<About />} />
          </Switch>
      </div>
    </>
  )
}


export default App;