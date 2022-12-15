import React from 'react'
import Profile from './Card/Profile'
import drStrange from '../../../assets/img/avatar/drStrange.jpg'
import antMan from '../../../assets/img/avatar/antMan.jpg'
import Thor from '../../../assets/img/avatar/thor.jpg'
import ironMan from '../../../assets/img/avatar/ironMan.jpg'
import {Container, Row, Col} from 'react-bootstrap';
// import './Contacto.css'


const contacto = () => {
  return (
    <Container className='mb-5'>
      <h1 className='my-3 text-center'>Las personas que trabajaron en este proyecto son:</h1>


      {/* <div className='wrapper text-center'>
        <Profile img={ironMan} name='Nicolas Viruel' text='BackEnd' />
        <Profile img={Thor} name='Jose Triviño' text='BackEnd' />
        <Profile img={antMan} name='Franco Monteros' text='FrontEnd' />
        <Profile img={drStrange} name='Gabriel carrizo' text='FrontEnd' insta="instagram.com"/>
      </div> */}





      {/* <Row>
          <Col xs={12} md={6} className='mx-auto'>
          <Profile img={ironMan} name='Nicolas Viruel' text='Test' />
        <Profile img={Thor} name='Jose Triviño' text='Test' />
          </Col>
          <Col xs={12} md={6} className='mx-auto'>
          <Profile img={antMan} name='Franco Monteros' text='Test' />
        <Profile img={drStrange} name='Gabriel carrizo' text='Test' />
          </Col>
        </Row> */}




        <Row className='text-center'>
          <Col className='mb-4 mx-auto text-center d-flex justify-content-center'>
          <Profile img={ironMan} name='Nicolas Viruel' text='BackEnd' face="https://www.facebook.com/" tw="https://twitter.com/" ig="https://www.instagram.com/" github="https://github.com/" linkedin="https://www.linkedin.com/"/>
          </Col>

          <Col className='mb-4 mx-auto text-center d-flex justify-content-center'>
          <Profile img={Thor} name='Jose Triviño' text='BackEnd' face="https://www.facebook.com/" tw="https://twitter.com/" ig="https://www.instagram.com/" github="https://github.com/" linkedin="https://www.linkedin.com/"/>
          </Col>

          <Col className='mb-4 mx-auto text-center d-flex justify-content-center'>
          <Profile img={antMan} name='Franco Monteros' text='FrontEnd' face="https://www.facebook.com/" tw="https://twitter.com/" ig="https://www.instagram.com/" github="https://github.com/" linkedin="https://www.linkedin.com/"/></Col>

          <Col className='mb-4 mx-auto text-center d-flex justify-content-center'>
          <Profile img={drStrange} name='Gabriel carrizo' text='FrontEnd' face="https://www.facebook.com/" tw="https://twitter.com/" ig="https://instagram.com/1gabrielcarrizo" github="https://github.com/1gabrielcarrizo" linkedin="https://www.linkedin.com/in/1gabrielcarrizo/"/>
          </Col>
        </Row>
    </Container>
  )
}

export default contacto