import  { useState} from 'react';
import {useHistory} from "react-router-dom"

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
      setLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, password }),
          }).then((r) => {
            setLoading(false);
            if (r.ok) {
              r.json().then((user) => onLogin(user))
            }
            else {
              r.json().then((err) => console.log(err))
            }
          })
        })
        //history.push("/")
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
      <button>{isLoading ? "Loading..." : "Sign Up"}</button>
    </form>
  )
}
export default SignUpForm;