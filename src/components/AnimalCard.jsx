import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const cardStyle = {
    width: '100px',
    marginBlock: "10px",
    backgroundColor: "transparent",
}
const textStyle = {
    color : "white"
}
function AnimalCard(props) {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title style={textStyle}>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default AnimalCard;