import React, { useState } from 'react';

function LoginForm({ onLogin, createCart }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      setLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
          createCart(user)
        })
      }
      else {
        r.json().then((err) => console.log(err))
      }
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label><b>name</b></label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      <label><b>Password</b></label>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <br></br>
      <button>{isLoading ? "Loading..." : "Login"}</button>
    </form>
  )
}
export default LoginForm;