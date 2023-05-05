import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Signup = (props) => {
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function submit(e){
      e.preventDefault();

      try{
        await axios.post("http://localhost:5000/api/register",{
          name,phone,email,password
        })
      }
      catch(e){
        console.log(e);
      }
  }
  return (
    <>
    <div className='signup-form'>
    <h1>Signup</h1>
    <form action="POST">
      <input type="text" placeholder="Enter Name" name="name" onChange={(e)=>{setName(e.target.value)}}></input><br></br>
      <input type="tel" placeholder="Enter Phone No." name="phone" onChange={(e)=>{setPhone(e.target.value)}}></input><br></br>
      <input type="email" placeholder="Enter Email Id" name="email" onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
      <input type="password" placeholder="Enter Password" name="password" onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
      <input type="submit" onClick={submit} className="signup-btn"></input>
      <hr></hr>
      <p>Already have an account ? <button className="login" onClick={()=>{props.setState(true)}}>Login</button></p>
    </form>
    </div>
    </>
  )
}

export default Signup