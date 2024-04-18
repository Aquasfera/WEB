import React, { useEffect, useState, useRef } from 'react';
import ImageMapper from 'react-img-mapper';
import mapImg from '../../assets/images/mapaGrande.png'
import cords from '../../assets/imagmap.json'
import { useNavigate } from 'react-router-dom';





const Maps = props => {

const divRef = useRef(null);
const [width, setWidth] = useState(null);
useEffect(() => {
    if (divRef.current) {
      // Obtenemos el ancho del div utilizando la propiedad offsetWidth
      const divWidth = divRef.current.offsetWidth;
      // Actualizamos el estado con el ancho obtenido
      setWidth(divWidth-30);

    }
  }, [width]);



const navigate = useNavigate();
const [clicked, setClicked] = useState(0)
const [route, setRoute] = useState("");



useEffect(()=>{
    navigate(route)

},[clicked])

const  test = (area,index,event)=>{
console.log(area.id)
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
        <div>
            <div className='container-fluid' ref={divRef} >
                {width}
                <ImageMapper src={mapImg} map={MAP}  onClick={test} responsive={true} parentWidth={width} />
            </div>
        </div>
    )
        ;
}

export default Maps;