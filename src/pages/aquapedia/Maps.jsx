import React, { useEffect, useState, useRef } from 'react';
import ImageMapper from 'react-img-mapper';
import mapImg from '../../assets/images/mapaGrande.png'
import cords from '../../assets/imagmap.json'
import { useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
const bgcolor = {

    minHeight: "100vh",
    backgroundColor: "#0A141F"
}
const titleStyle = {
    color: "#D2AD89",
    marginLeft: "1em",
    paddingTop: "0.8em"
}
const textStyle = {
    color: "white",
    marginLeft: "1.6em",
    marginRight: "2em",
    marginTop: "1em",
    fontSize: "1.6em",
    fontWeight: "lighter"
}
const Maps = props => {

    const divRef = useRef(null);
    const [width, setWidth] = useState();

    useEffect(() => {
        if (divRef.current.offsetWidth > 700) {
            setWidth(700)
        }else{
            setWidth(divRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (divRef.current.offsetWidth > 700) {
                setWidth(700)
            }else{
                setWidth(divRef.current.offsetWidth);
            }
            
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navigate = useNavigate();
    const [clicked, setClicked] = useState(0)
    const [route, setRoute] = useState("");

    useEffect(() => {
        navigate(route)
    }, [clicked])

    const test = (area) => {
        if (area.id == 1) {
            setRoute("/aquapedia/Mar Mediterráneo")
            setClicked(clicked + 1)
        }
        if (area.id == 2) {
            setRoute("/aquapedia/Océano Atlántico")
            setClicked(clicked + 1)
        }
        if (area.id == 3) {
            setRoute("/aquapedia/Mar Cantábrico")
            setClicked(clicked + 1)
        }

    }

    const MAP = {
        name: 'my-map',
        // GET JSON FROM BELOW URL AS AN EXAMPLE
        areas: cords,
    };

    return (
        <div style={bgcolor}>
            <h1 style={titleStyle}>
                ¡Descubre miles de especies en nuestro mapa!
            </h1>
            <div className='container-fluid d-flex justify-content-center' ref={divRef} >
                <ImageMapper src={mapImg} map={MAP} onClick={test} responsive={true} parentWidth={width - 30} />
            </div>
            <h2 style={textStyle}>
                ¡Haz clic en algun punto del mapa y descubre!
            </h2>
        </div>
    )
}

export default Maps;