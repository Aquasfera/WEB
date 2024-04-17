import bgImage from "../assets/images/PezPayasoPlaceholder.jpeg"
const titleOverImage = {
  position: "absolute",
  bottom: "2.4em",
  color: "white",
  marginLeft: "0.4em"
}
const shadow = {
  maxHeight: "16em",
}
const textOverImage = {
  position: "absolute",
  bottom: "0.5em",
  color: "white",
  marginLeft: "0.6em"
}
function FoundationCard() {
  return (
 
          <div className="col-12 position-relative mt-4 mb-4"  >
            <img src={bgImage} style={shadow} className="img-fluid rounded" />
            <h2 style={titleOverImage}  >
              Lorem Ipsum
            </h2>
            <h5 style={textOverImage} >
              Lorem ipsum dolor sit amet, consectrum sadtii.
            </h5>
          </div>

  );
}

export default FoundationCard;