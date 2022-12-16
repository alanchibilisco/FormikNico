import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const RoutePrivate = ({ children}) =>{
    
    const [user, setUser] = useState(null)
    
  useEffect( () =>{
    const user = localStorage.getItem("token");
    setUser(user);
  }, []);


    if (!user) {
        return <Navigate to="TablaUsuario" replace/>
    }
    return children
}

export default RoutePrivate