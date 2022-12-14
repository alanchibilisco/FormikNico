import {Button, Card} from 'react-bootstrap';
import './Profile.css'
// import dr from '../assets/img/avatar/doctor_strange_icon_by_thelivingethan_dcax023-pre.jpg'

const Profile = ({img, name, text}) => {
  return (
    <Card style={{ width: '18rem' }} className='card-test'>
      <Card.Img variant="top" src={img} className='card-test__image'/>
      <Card.Body>
        <Card.Title className='card-test__title'>{name}</Card.Title>
        <Card.Text className='card-test__text'>
          {text}
        </Card.Text>
        <Button variant="warning" className='card-test__btn'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Profile
