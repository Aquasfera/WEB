
import bgImage from "../assets/images/landing-bg.png";
import { NavLink } from "react-router-dom";
function Landing() {
    const backgroundimage = {
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "right"
    }
    const titleStyle = {
        fontSize: "3.5em",
        lineHeight: "1.4",
        color: "#CCDBDC",
        marginTop: "1em"
    }
    const textStyle = {
        fontSize: "1.5em",
        textDecoration: "none",
        textAlign: "center",
        marginLeft: "-1em",
        lineHeight: "1.6",
        color: "#CCDBDC"
    }
    const buttonContainerStyle = {
        marginTop: "32em",
    }
    const iconStyle = {
        height: "66px",
        width: "66px",
        color: "#CCDBDC"

    }

    const separation = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "spaceBetween"

    }

    const noTextDecoration = {
        textDecoration: "none"
    }
    const API = 1
    return (
        <div style={backgroundimage}>
            <div className="container" style={separation}>
                <h1 style={titleStyle}>
                    AQUASFERA
                </h1>
                <div className="d-inline-flex justify-content-around w-100" style={buttonContainerStyle}>
                    <NavLink to={"/aquapedia"} style={noTextDecoration}>
                        <img style={iconStyle} src="src/assets/icons/aquapedia-icon.svg" />
                        <p style={textStyle}>Aquapedia</p>
                    </NavLink>
                    <NavLink to={"/aquagram"} style={noTextDecoration}>
                        <img style={iconStyle} src="src/assets/icons/aquagram-icon.svg" />
                        <p style={textStyle}>Aquagram</p>
                    </NavLink>
                </div>
            </div>

        </div>

    );
}

export default Landing;
