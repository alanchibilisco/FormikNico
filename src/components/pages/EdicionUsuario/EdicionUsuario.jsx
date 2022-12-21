import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row, Image } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../../api/axiosUsuarios';
import logo from "../../../assets/img/logo/Imagen1.png";
import { validatePassword, validateEmail } from '../../helpers/validateFields';
import Swal from 'sweetalert2';

const EdicionUsuario = (props) => {
  props.funcNav(true)
  const [usuarioEditar, setUsuarioEditar] = useState({})

  const { id } = useParams()

  const usuarioNameRef = useRef("")
  const usuarioEmailRef = useRef("")
  const usuarioPasswordRef = useRef("")
  const usuarioRoleRef = useRef("")
  const navigate = useNavigate()

//   const volverTabla = navigate("/tablaUsuarios")
  const getUsuariosID = async () => {
    try {
      const resp = await instance.get(`/users/${id}`);
      setUsuarioEditar(resp.data)
      // console.log((resp.data));
      ;
    } catch (error) {
      console.log(error);
      alert("Error")
    }
  }

  useEffect(() => {
    getUsuariosID()

  }, [])
  useEffect(() => {
    props.funcNav(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(usuarioNameRef.current.value);
    // console.log(usuarioEmailRef.current.value);
    // console.log(usuarioPasswordRef.current.value);
    // console.log(usuarioRoleRef.current.value);

    if (
      !validateEmail(usuarioEmailRef.current.value) ||
      !validatePassword(usuarioPasswordRef.current.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'One or more fields are invalid!'
          })
      return
    };
    const user_token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    }
    console.log("datos correctos");
    const usuarioActualizado = {
      name: usuarioNameRef.current.value,
      email: usuarioEmailRef.current.value,
      password: usuarioPasswordRef.current.value,
      role: usuarioRoleRef.current.value
    };

    Swal.fire({
      title: 'Do you want to update this user?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await instance.put(`/users/${id}`,
            usuarioActualizado, config
          );
          if (resp.status === 200) {
            Swal.fire(
              'Actualizado',
              'The user was successfully updated.',
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
      <Container className="py-5" >
        <h1 >Edit User</h1>
        <hr />
        <Row>
          <Col xs={12} md={6}>
            <Form className="my-2" >
              <Form.Group className="my-1" controlId="nombreUsuario">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Ej:Carlos" defaultValue={usuarioEditar.name}
                  ref={usuarioNameRef} maxLength={50} minLength={4} />
              </Form.Group>
              <Form.Group className="my-1" controlId="emailUsuario">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" defaultValue={usuarioEditar.email} ref={usuarioEmailRef} />
              </Form.Group>
              <Form.Group className="my-1" controlId="passwordUsuario">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" defaultValue={usuarioEditar.password} ref={usuarioPasswordRef} />
              </Form.Group>
              <Form.Group className="my-1" controlId="roleUsuario">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" placeholder="Enter your role" defaultValue={usuarioEditar.role} ref={usuarioRoleRef} />
              </Form.Group>
              <div className="text-center mt-3">
                <Button variant="warning" onClick={handleSubmit}>Update 🍻</Button>
                <Button variant="danger" className='mx-3' onClick={() => navigate(`/tablaUsuarios`)}>Go to Back 🡆</Button>
              </div>
            </Form>
          </Col>

          {/* Form Product */}
          <Col className="d-none d-md-block text-center">
            <Image src={logo} alt="logo" style={{maxWidth: '80%'}} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EdicionUsuario