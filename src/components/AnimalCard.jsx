import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const cardStyle = {
  width: '7em',
  marginBlock: "1em",
  backgroundColor: "transparent",
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
      <Card style={cardStyle}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body className='px-1'>
          <Card.Title className='d-flex justify-content-start' style={textStyle}>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>

  );
}

export default AnimalCard;