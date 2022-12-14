import React from 'react'
import Profile from './Card/Profile'
import drStrange from '../../../assets/img/avatar/doctor_strange_icon_by_thelivingethan_dcax023-pre.jpg'
import antMan from '../../../assets/img/avatar/ant_man_icon_by_thelivingethan_dcipp2j-pre.jpg'
import Thor from '../../../assets/img/avatar/king_thor_icon_by_thelivingethan_dc7ovrv-pre.jpg'
import captainAmerica from '../../../assets/img/avatar/steve_rogers_icon_by_thelivingethan_dc70574-pre.jpg'
import Container from 'react-bootstrap/Container';
import './Contacto.css'


const contacto = () => {
  return (
    <Container className='mb-5'>
      <h1 className='mb-5'>Esto es un mensaje de nosotros hacia nuestros clientes sobre quienes somos etc etc</h1>
      <div className='wrapper'>
        <Profile img={captainAmerica} name='Nicolas Viruel' text='Test' />
        <Profile img={Thor} name='Jose Triviño' text='Test' />
        <Profile img={antMan} name='Franco Monteros' text='Test' />
        <Profile img={drStrange} name='Gabriel carrizo' text='Test' />
      </div>
    </Container>
  )
}

export default contacto