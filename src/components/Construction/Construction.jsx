import React from 'react'
import { Container, Image } from 'react-bootstrap'
import construction1 from '../../assets/gif/construction1.gif'
import construction2 from '../../assets/gif/construction2.gif'
import './Construction.css'

const Construction = () => {
    return (
        <Container className='text-center'>
            <Image src={construction1} alt="construction" className='construction'/>
            <h4 className='mb-5'>This page is not ready.. yet. Come back later, thanks!</h4>
        </Container>
    )
}

export default Construction
