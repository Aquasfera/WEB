import bgImage from "../assets/images/landing-bg.png";
import { NavLink } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
function Landing() {
  const backgroundimage = {
    height: "100vh",
    backgroundImage: `url(${bgImage})`,
  };
  const titleStyle = {
    paddingTop: "150px",
    marginLeft: "50px",
    marginRight: "50px",
    fontSize: "40px",
    lineHeight: "1.4",
    color: "#CCDBDC",
  };
  const textStyle = {
    marginTop: "90px",
    marginLeft: "50px",
    marginRight: "50px",
    fontSize: "20px",
    lineHeight: "1.6",
    color: "#CCDBDC",
  };
  const buttonContainerStyle = {
    marginTop: "80px",
  };
  const buttonStyle = {
    paddingInline: "30px",
    paddingBlock: "10px",
    borderColor: "#CCDBDC",
    borderStyle: "solid",
    backgroundColor: "transparent",
    color: "#CCDBDC",
  };
  const login = {
    backgroundColor: "#CCDBDC",
  };
  return (
    <div style={backgroundimage}>
      <div className="container">
        <h1 style={titleStyle}>Lorem ipsum dolor comsdosd adispldsa elit</h1>
        <h5 style={textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h5>
        <div
          className="d-inline-flex justify-content-around w-100"
          style={buttonContainerStyle}
        >
          <NavLink to={"/mapa"}>
            <button className="rounded" style={buttonStyle}>
              Mapa
            </button>
          </NavLink>
          <NavLink to={"/insta"}>
            <button className="rounded" style={buttonStyle}>
              Insta
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Landing;
