import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Service = () => {

  const[info,setInfo]=useState('');

  const getService=async()=>{
    const response=await axios.get('http://localhost:5000/api/data/service');
    const data=response.data.msg;
    setInfo(data);
  }

  useEffect(()=>{
    getService();
    },[]);
console.log(info);
  return (
    <div>Service

        {info.map((service) => (
          <div key={service._id}>
            <h3>{service.service}</h3>
            <p>Description: {service.description}</p>
            <p>Price: {service.price}</p>
          </div>
        ))}
    </div>
  )
}

export default Service