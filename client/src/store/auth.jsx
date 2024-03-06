import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const[token,setToken]=useState(localStorage.getItem('token'));
    const[user,setUser]=useState('');

    const storetokenInLS=(serverToken)=>{
        return localStorage.setItem('token',serverToken);
    }

    const userAuthentication = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
    
            // Check if the response status is OK (200)
            if (response.status === 200) {
                // Assuming the response data is an object containing user information
                const data =await response.data;
                console.log("User data:", data.userData);
                // Update the user state with the received data
                setUser(data.userData);
            } else {
                console.error('Unexpected response status:', response.status);
                // Handle unexpected response status
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle errors here, such as displaying a message to the user
        }
    };
    
useEffect(()=>{
    userAuthentication();
},[]);

    return <AuthContext.Provider value={{storetokenInLS,user}}>
        {children}
        </AuthContext.Provider>
}

export const useAuth=()=>{
    const authContextValue= useContext(AuthContext);
    if(!authContextValue){
        throw new error("useAuth used outside of Provider");
    }
    return authContextValue;
}