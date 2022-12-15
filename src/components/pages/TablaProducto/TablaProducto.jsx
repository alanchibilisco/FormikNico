import React from 'react'
import instance from '../../../api/axiosUsuarios'

const TablaProducto = (props) => {


  const tablaProducto = async() =>{
    try {
      const res = await instance.get("/users")
    } catch (error) {
      
    }
  }



  return (
    <div>TablaProducto</div>
  )
}

export default TablaProducto