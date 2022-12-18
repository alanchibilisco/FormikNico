import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row ,} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../../api/axiosUsuarios';
import logo from "../../../assets/img/logo/Imagen1.png";
import { validatePassword } from '../../helpers/validateFields';


const EdicionUsuario = () => {
    props.funcNav(true)
  const [usuarioEditar, setUsuarioEditar] = useState({})

  const{id}= useParams()

  const usuarioNameRef =useRef("") 
  const usuarioEmailRef =useRef("") 
  const usuarioPasswordRef =useRef("") 
  const usuarioRoleRef =useRef("") 
  const navigate = useNavigate()

  const getUsuariosID = async()=>{
    try {
      const resp =await instance.get(`/users/${id}`,)
      console.log(resp);      
      setUsuarioEditar(resp.data)      
      ;
    } catch (error) {
     console.log(error);
     alert("Error")       
    }
  }

  useEffect(()=>{
    getProductosID()

  },[])

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(usuarioNameRef.current.value);
    if (!validateName(usuarioNameRef.current.value) ||
    !validatePassword(usuarioEmailRef.current.value) ||
    !validatePassword(usuarioPasswordRef.current.value) ||
    !validateRole(usuarioRoleRef.current.value)) {
        Swal.fire("ops!","Uno o mas Datos son Invalidos","Error")     
     return 
    };
    console.log("datos correctos");
     const usuarioActualizado= {
      name:usuarioNameRef.current.value,
      email:usuarioEmailRef.current.value,
      password:usuarioPasswordRef.current.value,
      role:usuarioRoleRef.current.value
    };

    Swal.fire({
        title: 'Quieres actualizar este Usuario?',    
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then( async (result) => {
        if (result.isConfirmed) {
          try {
             const resp = await instance.put(`/users/${id}`,
            usuarioActualizado,         
          );
          if (resp.status===200) { 
            Swal.fire(
              'Actualizado',
              'Su Usuario se actualizo correctamente.',
              'success'
            )
            navigate(`/TablaUsuario`)
    
          }    
          } catch (error) {
          console.log(error);  
          }
        }
      });
    }





  return (
    <div>
        <Container className="py-1" >
        <h5>Editar Producto</h5>        
        <Row>
          <Col lg={6}>
          <Form className="my-2" >
          <Form.Group className="my-1" controlId="nombreUsuario">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ej:Carlos" defaultValue={usuarioEditar.name}
            ref={productoNameRef}/>
          </Form.Group>
          <Form.Group className="my-1" controlId="emailUsuario">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com"  defaultValue={usuarioEditar.email} ref={usuarioEditarRef}/>
          </Form.Group>
          <Form.Group className="my-1" controlId="passwordUsuario">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter your password" defaultValue={usuarioEditar.password} ref={productoPriceRef} />
          </Form.Group>
          <Form.Group className="my-1" controlId="roleUsuario">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Enter your role" defaultValue={usuarioEditar.role} ref={productoPriceRef} />
          </Form.Group>
          <div className="text-center">
            <Button variant="warning" onClick={handleSubmit}>Actualizar🍻</Button>
          </div>
        </Form>
          </Col>
      
        {/* Form Product */}
        <Col lg={6} >
        <img src={logo} alt="" />
        </Col>
        </Row>
      </Container>       
    </div>
  )
}

export default EdicionUsuario