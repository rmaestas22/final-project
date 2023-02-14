import {Container, Dropdown, FormControl, Navbar, Nav, Badge, } from "react-bootstrap"
import DropdownMenu from "react-bootstrap/esm/DropdownMenu"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Header = ({user, setUser}) => {

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          setUser(null);
        }
      })
  }

  return (
  <Navbar bg="dark" variant="dark" style={{height: 80 }}>
    <Container>
      <Navbar.Brand >
        <Link to= "/">Band</Link>
        <Link to= "/item">Merch</Link>
        <Link to= "/cart">Cart</Link>
      </Navbar.Brand>
        < Navbar.Text className='search'>
          <FormControl
          style={{width: 500 }}
          placeholder="Search"
          className=",auto"/>
        </Navbar.Text>
        <Nav>
          <Dropdown alignright>
            <DropdownToggle variant="success">
              <FaShoppingCart color="white" fontSize="25px"  />
              <Badge>{}</Badge>
            </DropdownToggle>

            <DropdownMenu style={{minWidth: 370}}>
              <span style={{ padding: 10 }} > Cart Is Empty </span>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        <button onClick={handleLogout}>Logout</button>
    </Container>
  </Navbar>

  )
}

export default Header