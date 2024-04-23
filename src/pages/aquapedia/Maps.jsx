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
    const [width, setWidth] = useState(null);
    useEffect(() => {
        if (divRef.current) {
            // Obtenemos el ancho del div utilizando la propiedad offsetWidth
            const divWidth = divRef.current.offsetWidth;
            // Actualizamos el estado con el ancho obtenido
            setWidth(divWidth - 30);

        }
    }, [width]);



    const navigate = useNavigate();
    const [clicked, setClicked] = useState(0)
    const [route, setRoute] = useState("");

    useEffect(() => {
        navigate(route)
    }, [clicked])

    const test = (area) => {
        if (area.id == 1) {
            setRoute("/aquapedia/Mar Mediterraneo")
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
        <>
            <div style={bgcolor}>
                <h1 style={titleStyle}>
                    Descubre miles de especies en nuestro mapa!
                </h1>
                <div className='container-fluid' ref={divRef} >
                    {width}
                    <ImageMapper src={mapImg} map={MAP} onClick={test} responsive={true} parentWidth={width} />
                </div>
                <h2 style={textStyle}>
                    Clica en algun punto del mapa y descubre!
                </h2>
            </div>
            <div>
                <AboutUs />
            </div>
        </>
    )
        ;
}

export default Maps;