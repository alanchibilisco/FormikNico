import React from 'react'
import { Container } from 'react-bootstrap'
import Construction from '../../Construction/Construction'

const Destacados = (props) => {
  props.funcNav(true)
  return (
    // <div>Destacados</div>
    <Container>
      <h1>Destacados</h1>
      <hr />
      <Construction/>
    </Container>
  )
}

export default Destacados