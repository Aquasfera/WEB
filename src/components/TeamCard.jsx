import React from 'react'
import githubIcon from "../assets/images/github.svg"
import linkedinIcon from "../assets/images/linkedin.svg"

export default function TeamCard(props) {
    // const {actualUser, logout} = useContext(Context);
    const API_URL_PHOTOS = process.env.REACT_APP_API_URL_PHOTOS;
    const svgStyle = {
        width: "2em",
        height: "auto",
    }

    const style = {
        width: "10em",
        backgroundColor: "#273654",
        borderRadius: "10px",
        color: "white",
    }
    return (
        <div className="card m-1" style={style}>
            <img className="card-img-top" src={props.photo} alt="Card image"></img>
            <div className="card-body text-center text-sm">
                <h4 className="card-title">{props.name}</h4>
                <div className='d-flex justify-content-center'>
                    <a className='' href={props.github} target="_blank" rel="noreferrer">
                        <img className='img-fluid' style={svgStyle} src={githubIcon}></img>
                    </a>
                    <a className='ps-2' href={props.linkedin} target="_blank" rel="noreferrer">
                        <img className='img-fluid' style={svgStyle} src={linkedinIcon}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
