import { useEffect, useState } from "react";
import Navhead from "../components/Navhead";
import { useParams } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';


function AnimalDetail() {


    let { name } = useParams()
    const subtitleStyle = {
        color: "white",
        marginLeft: "1.6em",
        marginRight: "2em",
        marginTop: "1em",
        fontSize: "1.1em",
        fontWeight: "lighter"
    }
    const textStyle = {
        color: "white",
        marginLeft: "1.6em",
        marginRight: "2em",
        marginBlock: "1.3em",
        fontSize: "1.1em",
    }
    const bgcolor = {

        minHeight: "100vh",
        maxWidth: "100vw",
        backgroundColor: "#0A141F"
    }
    const titleStyle = {
        color: "#D2AD89",
        marginLeft: "1em",
        paddingTop: "0.8em"
    }
    const listStyle = {
        color: "white"
    }
    const elementStyle = {
        marginBlock: "0.6em",
        marginLeft: "1em"
    }
    const [animalData, setAnimalData] = useState(null);

    useEffect(() => {
        try {
            fetch('http://192.168.1.244:3000/api/animal/name/' + name)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setAnimalData(data)
                })
        } catch (error) {
            console.error(error);
        }
    }, [])

    if (animalData === null) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <Navhead />
            <div className="container-fliud" style={bgcolor}>
                <h1 style={titleStyle}>
                    {animalData.name}
                </h1>
                <h5 style={subtitleStyle}>
                    {animalData.description}
                </h5>
                <div className="container-fluid">
                    <img src={`http://192.168.1.244:3000/photos/` + animalData.photos[0]?.url} className="img-fluid mt-3 rounded" alt={animalData.name} />
                </div>
                <div >
                    <h5 style={textStyle} className="mt-5">
                        Ficha tecnica {animalData.name}
                    </h5>
                    <ul   style={listStyle}>
                        <li style={elementStyle}>Tipo :</li>
                        <li style={elementStyle}>Especie :</li>
                        <li style={elementStyle}>Peso :</li>
                        <li style={elementStyle}>Tamaño :</li>
                        <li style={elementStyle}>Otras localizaciones :</li>
                    </ul>

                </div>
                <h1 style={titleStyle}>
                    Avistamientos
                </h1>
                <h1 style={titleStyle}>
                    Fundaciones
                </h1>


            </div>
        </>

    )
}


export default AnimalDetail;