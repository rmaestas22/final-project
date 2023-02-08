import React, { useSate } from "react";


export const Login = () => {
  const {name, setName} = useSate(" ");
  const {pass, setPass} = useSate(" ");

  const handleSubmit = () => {

  }

  return (
    <form>
      <label for= "name">name</label>
      <input type= "name" placeholder="name" id="name" name="name" />
      <label for="password">password</label>
      <input type="password" placeholder="password" id="password" name="password" />
    </form>
  )
}



export default Login