import React, { useState } from 'react'
import "./Components.css"
import axios from 'axios';

const Login = (props) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function submit(e){
      e.preventDefault();

      try{
        await axios.post("http://localhost:5000/api/login",{
          email,password
        })
      }
      catch(e){
        console.log(e);
      }
  }
  return (
    <>
    <div className='login-form'>
      <h1>Login</h1>
      <form action="POST">
      <input type="email" placeholder="Email Address" name="email" onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
      <input type="password" placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
      <input type="submit" onClick={submit} className='login-btn'></input>
      </form>
      <hr></hr>
      <button className='create-account' onClick={()=>{props.setState(false)}}>Create Account</button>
      </div>
    </>
  )
}

export default Login