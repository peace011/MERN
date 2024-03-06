import React from 'react'
import { useAuth } from '../store/auth'

const About = () => {
  const {user}=useAuth();
  return (
    <div>About
      <h2>Hi {user.username}</h2>
    </div>
  )
}

export default About