import React from 'react'
import axios from 'axios'

const Technology = () => {
    const token = localStorage.getItem('token')
    const showData = async() =>{
        if(token===undefined){
            alert("User is not authorised to view particular page!!")
        }
        else{
            const response = await axios.get("https://login-signup-backend-api.onrender.com/api/technology",{
                headers: {
                    'Authorization': "Bearer " + token
                }
            })
            const data = response.data;
            console.log(data);
        }
    }
  return (
    <>
    <button onClick={showData}>Technology</button>
    </>
  )
}

export default Technology