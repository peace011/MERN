import React, { useState,useEffect } from 'react'
import axios from'axios';
import { useAuth } from '../store/auth';

const Contact = () => {
  const[info,setInfo]=useState({username:'',email:'',message:''})
  const[userData,setUserData]=useState(true);
  const[token,setToken]=useState(localStorage.getItem('token'));

  const {user}=useAuth();

  if(userData && user){
    setInfo({
      username:user.username,
      email:user.email,
      message:'',
    });
    setUserData(false);
  }

  const handleChange=(e)=>{
    setInfo(previnfo=>({...previnfo,[e.target.name]:e.target.value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/form/contact',info,{
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(resp=>setInfo(resp.data))
    .catch(err=>console.error(err))
  }
  return (
    <div className="top flex justify-end">
      <div className="wrapper border border-black w-3/5 space-y-4 justify-end mt-24">
        <div className="form">
          <h2 className='text-2xl flex justify-center'>Contact</h2>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='text' name='username' value={info.username} onChange={handleChange} placeholder='username' />
            <label>Email</label>
            <input type='text' name='email' value={info.email} onChange={handleChange} placeholder='email' />
            <label>Message</label>
            <input type='text' name='message' value={info.message} onChange={handleChange} placeholder='message' />
           
            <button onClick={handleSubmit}>Contact</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact