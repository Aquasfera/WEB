const titleOverImage = {
  position: "absolute",
  top: "0.3em",
  color: "white",
  marginLeft: "0.4em",
  fontSize: "2.4em",
  textShadow: `2px 5px 7px rgba(0, 0, 0, 1)`
}
const textOverImage = {
  position: "absolute",
  bottom: "0.5em",
  color: "white",
  marginLeft: "1em",
  fontSize: "1em",
  textShadow: `2px 5px 7px rgba(0, 0, 0, 1)`
}
function FoundationCard(props) {
  return (

    <a href={props.dir}>
      <div className="col-12 col-lg-7 position-relative mt-4 mb-4"  >
        <img src={props.img}  className="img-fluid rounded " />
        <h2 style={titleOverImage}  >
          {props.name}
        </h2>
        <h5 style={textOverImage} >
          {props.description}
        </h5>
      </div>
    </a>


  );
}

export default FoundationCard;