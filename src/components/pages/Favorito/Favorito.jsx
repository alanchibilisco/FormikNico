import React from 'react'
import { Container } from 'react-bootstrap'
import Construction from '../../Construction/Construction'

const Favorito = (props) => {
  props.funcNav(true)
  return (
    // <div>Favorito</div>
    <Container>
      <h1>Favoritos</h1>
      <hr />
      <Construction/>
    </Container>
  )
}

export default Favorito
