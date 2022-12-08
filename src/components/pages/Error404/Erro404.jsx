import React from 'react'
import { Link } from 'react-router-dom'
import {Container, Image, Button} from 'react-bootstrap'
import error404 from '../../../assets/img/error404.gif'

const Erro404 = () => {
  return (
    <Container className='text-center mb-5'>
      <Image src={error404}/>
      <div>
        <h3>It seems there was an error 🤔 back to home!</h3>
        <Button size="lg" variant="warning" className='my-4 text-decoration-none'><Link to="/" className=" text-decoration-none text-center text-black">Home</Link></Button>
      </div>
    </Container>
  )
}

export default Erro404