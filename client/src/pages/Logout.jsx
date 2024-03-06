import React, { useEffect,useState } from 'react'

const Logout = () => {
    const[token,setToken]=useState(localStorage.getItem('token'));

    const logoutUser=()=>{
        setToken('');
        return localStorage.removeItem('token');
    }
    useEffect(()=>{
        logoutUser();
    })
  return (
    <div>

    </div>
  )
}

export default Logout