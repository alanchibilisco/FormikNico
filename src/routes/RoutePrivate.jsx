import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const RoutePrivate = ({ children}) =>{
    
    const [user, setUser] = useState(null)
    
  useEffect( () =>{
    const users = localStorage.getItem("token");
    console.log(users);
    setUser(users);
  }, []);


    if (user) {
        return <Navigate to="TablaUsuario" replace/>
    }
    return children
}

export default RoutePrivate