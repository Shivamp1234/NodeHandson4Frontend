import React, { useState } from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';
import "./Components/Components.css"
import Bollywood from './Components/Bollywood';
import Technology from './Components/Technology';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';

const App = () => {
  const [state,setState] = useState(true);
  return (
    <>
    {state?<Login setState={setState}/>:<Signup setState={setState}/>}
    <div className='buttons'>
    <Bollywood/>
    <Technology/>
    <Hollywood/>
    <Fitness/>
    <Food/>
    </div>
    </>
  )
}

export default App
