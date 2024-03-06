import { useState } from 'react'
// import './App.css'
import Home from './pages/Home'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import About from './pages/About'
import Register from './pages/Register'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import './style.css';
import Logout from './pages/Logout'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/logout' element={<Logout/>}/>


     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
