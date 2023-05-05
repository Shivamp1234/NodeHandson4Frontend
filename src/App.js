import React, { useState } from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';
import "./Components/Components.css"

const App = () => {
  const [state,setState] = useState(true);
  return (
    <>
    {state?<Login setState={setState}/>:<Signup setState={setState}/>}
    </>
  )
}

export default App
