
import bgImage from "../assets/images/landing-bg.png";
import { NavLink } from "react-router-dom";
function Landing() {
    const backgroundimage = {
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`
    }
    const titleStyle = {
        paddingTop: "3em",
        marginLeft: "1em",
        marginRight: "1em",
        fontSize: "2.5em",
        lineHeight: "1.4",
        color: "#CCDBDC"
    }
    const textStyle = {
        marginTop: "3em",
        marginLeft: "2.5em",
        marginRight: "1em,",
        fontSize: "1.1em",
        lineHeight: "1.6",
        color: "#CCDBDC"
    }
    const buttonContainerStyle = {
        marginTop: "5em",
    }
    const buttonStyle = {
        paddingInline: "2em",
        paddingBlock: "0.6em",
        borderColor: "#CCDBDC",
        borderStyle: "solid",
        backgroundColor: "transparent",
        color: "#CCDBDC"

    }
    const API = 1
    return (
        <div style={backgroundimage}>
            <div className="container">
                <h1 style={titleStyle}>
                    Aquasfera
                </h1>
                <h5 style={textStyle}>
                    ¡Descubre el fondo marino y las especies que se esconden en él!
                </h5>
                <div className="d-inline-flex justify-content-around w-100" style={buttonContainerStyle}>
                    <NavLink to={"/aquapedia"}>
                        <button className="rounded" style={buttonStyle}>Mapa</button>
                    </NavLink>
                    <NavLink to={"/aquagram"}>
                        <button className="rounded" style={buttonStyle}>Insta</button>
                    </NavLink>
                </div>
            </div>

        </div>

    );
}

export default Landing;
