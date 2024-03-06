import React, { useState } from 'react'
import axios from'axios';

const Login = () => {
  const[info,setInfo]=useState({username:'',email:'',phone:'',password:''})

  const handleChange=(e)=>{
    setInfo(previnfo=>({...previnfo,[e.target.name]:e.target.value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/auth/login',info, {
      headers: {
        'Content-Type': 'application/json'
   } })
    .then(resp=>{ if(resp.data.token){
      // storetokenInLS(resp.data.token);
      localStorage.setItem('token',resp.data.token);
    }      console.log(resp.data);
  })
    .catch(err=>console.error(err))
  }
  return (
    <div className="top flex justify-end">
      <div className="wrapper border border-black w-3/5 space-y-4 justify-end mt-24">
        <div className="form">
          <h2 className='text-2xl flex justify-center'>Login</h2>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            
            <label>Email</label>
            <input type='text' name='email' value={info.email} onChange={handleChange} placeholder='email' />

            <label>Password</label>
            <input type='text' name='password' value={info.password} onChange={handleChange} placeholder='password' />
            <button>Login</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login