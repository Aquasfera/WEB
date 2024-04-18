import React, { useEffect, useState } from 'react';
import NavheadAquapedia from '../../components/NavheadAquapedia'
import ImageMapper from 'react-img-mapper';
import mapImg from '../../fakedata/fisico.gif'
import cords from '../../fakedata/imagmap.json'
import { useNavigate } from 'react-router-dom';

const Maps = props => {

const navigate = useNavigate();
const [clicked, setClicked] = useState(0)
const [route, setRoute] = useState("");

useEffect(()=>{
    navigate(route)

},[clicked])

const  test = (area,index,event)=>{
console.log(area.id)
if (area.id == 1) {
    setRoute("/aquapedia/animals")
    setClicked(clicked + 1)
}

}

    const URL = { mapImg }
    const MAP = {
        name: 'my-map',
        // GET JSON FROM BELOW URL AS AN EXAMPLE
        areas: cords,
    };

    return (
        <div>
            <NavheadAquapedia />
            <div className='container-fluid'>
                <ImageMapper src={mapImg} map={MAP}  onClick={test} width={props.width}  height={props.height}  imgWidth={props.imgWidth}   />
            </div>

        </div>
    )
        ;
}

export default Maps;