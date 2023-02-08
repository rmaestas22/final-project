import { Link } from "react-router-dom"

export default function Navbar(){
  return <nav className="nav">
    <Link to="/" className="site-title">TongueByte</Link>
    <ul>
      <CustomLink to="/merch">Merch</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/login">Login</CustomLink>
    </ul>
  </nav>
}

function CustomLink({ to, children, ...props }){
  const path = window.location.pathname
  return (
    <li className= {path === to ? "active" : ""} >
      <Link to={to} {...props}> {children} </Link>
    </li>
  )
}