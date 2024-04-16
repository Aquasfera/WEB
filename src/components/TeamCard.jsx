import React from 'react'
import githubIcon from "../assets/images/github.svg"
import linkedinIcon from "../assets/images/linkedin.svg"
import ods from "../assets/images/ods-3.png"
export default function TeamCard(props) {

    const svgStyle = {
        width: "2em",
        height: "auto",
    }
    const imgStyle = {
        width: "auto",
        height: "auto",
    }
    const cardStyle = {
        backgroundColor: "#273654",
        borderRadius: "10px",
    }

    return (

        <div className="col-4 col-md-4 col-lg-2 m-2 d-flex flex-column flex-wrap align-items-center" style={cardStyle}>
            <div className='p-2'>
                <img src={ods} className="rounded-circle card-img-top pt-2 img-fluid" style={imgStyle} alt={props.name} />
                
                <div>
                    <h5 style={props.style} className="text-center card-title">{props.name}</h5>
                </div>
                <div className='pt-2 d-flex justify-content-center flex-row'>
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
