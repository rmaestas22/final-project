import { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";


function Login({ onLogin }) {
  const [show, setShow] = useState(true);

  function createCart(user){
    fetch(`/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id
      })
    })
    .then(data => data.json())
    .then(data => console.log(data))
  }
  return (
    show ? (
      <>
        <LoginForm onLogin={onLogin} createCart= {createCart}/>
        Don't have an account?
        <button onClick={() => setShow(false)}>Sign UP</button>
      </>
    ) : (
      <>
        <SignUpForm onLogin={onLogin} createCart={createCart} />
        Already have an account?
        <button onClick={() => setShow(true)}>Log In</button>
      </>
    )
  );
}
export default Login;