import React from 'react'
import axios from 'axios'

const Bollywood = () => {
    const token = localStorage.getItem('token')
    const showData = async() =>{
        if(token===undefined){
            alert("User is not authorised to view particular page!!")
        }
        else{
            const response = await axios.get("http://localhost:5000/api/bollywood",{
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
    <button onClick={showData}>Bollywood</button>
    </>
  )
}

export default Bollywood