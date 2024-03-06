import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[token,setToken]=useState(localStorage.getItem('token'));
  // console.log(token); 

  const isloggedin =!!token;
  console.log("isloggedin", isloggedin);
  
  return (
    <div className='flex'>
        <div className='flex-1 '>Websites</div>
        <div className="nav">
          <div className="div flex-1 space-x-4 ">
            <Link to='/' className=''>Home</Link>
            <Link to='/about' className=''>About</Link>
            <Link to='/service' className=''>Service</Link>
            <Link to='/contact' className=''>Contact</Link>
            {isloggedin ?
            <>
               <Link to='/logout' className=''>Logout</Link>
            </>:
            <>
            <Link to='/register' className=''>Register</Link>
            <Link to='/login' className=''>Login</Link>
            
            
            </>
          }


          </div>
        </div>
       

    </div>
  )
}

export default Navbar