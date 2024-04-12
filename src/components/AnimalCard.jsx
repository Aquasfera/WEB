import Card from 'react-bootstrap/Card';
const cardStyle = {
    width: '7em',
    marginBlock: "1em",
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