import { Link } from "react-router-dom"

function Navbar({ user, setUser}){

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

  function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname
    return (
      <li className={path === to ? "active" : ""} >
        <Link to={to} {...props}> {children} </Link>
      </li>
    )
  }

  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">TongueByte</Link>
        <ul>
          <CustomLink to="/cart">Cart</CustomLink>
          <CustomLink to="/merch">Merch</CustomLink>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Navbar