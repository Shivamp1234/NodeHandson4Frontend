import React, { useState } from 'react'
import "./Components.css"
import axios from 'axios';

const Login = (props) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function submit(e){
      e.preventDefault();
      try{
        const response = await axios.post("https://login-signup-backend-api.onrender.com/api/login",{
          email,password
        })
        const data = response.data;
        localStorage.setItem('token',data.token);
      }
      catch(error){
        console.log(error);
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