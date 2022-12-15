import {Card} from 'react-bootstrap';
import './Profile.css'
import Icons from './social-icons/Icons';

const Profile = ({img, name, text, face, tw, ig, github, linkedin}) => {
  return (
    <Card style={{ width: 'fit-content' }} className='card-test text-center'>
      <Card.Img variant="top" src={img} className='card-test__image mx-auto'/>
      <Card.Body>
        <Card.Title className='card-test__title mb-0'>{name}</Card.Title>
        <Card.Text className='card-test__text'>{text}</Card.Text>
        <Icons face={face} tw={tw} ig={ig} github={github} linkedin={linkedin}/>
      </Card.Body>
    </Card>
  )
}

export default Profile
