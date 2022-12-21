import React from 'react'
import { Container } from 'react-bootstrap'
import Construction from '../../Construction/Construction'

const Favorito = (props) => {
  props.funcNav(true)
  return (
    // <div>Favorito</div>
    <Container className='pt-5'>
      <h1>Favorites</h1>
      <hr />
      <Construction/>
    </Container>
  )
}

export default Favorito
