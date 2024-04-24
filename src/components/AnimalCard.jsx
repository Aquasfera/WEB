import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const cardStyle = {

  marginBlock: "1em",
  backgroundColor: "transparent"

}
const body = {
  backgroundColor: "#0A141F",
  opacity: "0.8"
}
const textStyle = {

  color: "white"
}
const noStyle = {
  textDecoration: 'none'
}
function AnimalCard(props) {
  return (
    <Link style={noStyle} to={props.name}>
      <Card style={cardStyle} className='shadow-lg'>
        <Card.Img variant="top" src={props.img} />
        <Card.Body className='px-1 rounded-bottom' style={body} >
          <Card.Title className='d-flex justify-content-start' style={textStyle}>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>

  );
}

export default AnimalCard;