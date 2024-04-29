import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Foundations from "../../components/Fouondations";
import CarouselPhotos from "../../components/CarouselPhotosAnimals"
import Loading from "../../components/Loading";
import Sightings from "../../components/Sightings"

function AnimalDetail() {


    let { name } = useParams()
    const subtitleStyle = {
        color: "white",
        marginLeft: "1.6em",
        marginRight: "2em",
        marginTop: "1em",
        fontSize: "1.1em",
        fontWeight: "lighter",
        textAlign: "justify"
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
        color: "white",
        listStyle: "none",
        marginLeft: "-1em"
    }
    const elementStyle = {
        marginBlock: "0.6em",
        marginLeft: "0.5em",
        color: "white"
    }
    const divStyle = {
        marginRight: "4.5em"
    }
    const [animalData, setAnimalData] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;
    useEffect(() => {
        try {
            fetch(API_URL + 'animal/name/' + name)
                .then(res => res.json())
                .then(data => {
                    setAnimalData(data)
                })
        } catch (error) {
            console.error(error);
        }
    }, [])

    if (animalData === null) {
        return <Loading />
    }

    return (
        <>
            <div className="container-fliud" style={bgcolor}>
                <h1 style={titleStyle}>
                    {animalData.name}
                </h1>

                <div className="container-fluid">

                    <CarouselPhotos id={animalData.id} />

                </div>
                <h5 style={subtitleStyle}>
                    {animalData.description}
                </h5>
                <div style={divStyle}>
                    <h5 style={textStyle} className="mt-5">
                        Ficha tecnica {animalData.name}
                    </h5>
                    <ul style={listStyle}>
                        <li style={titleStyle}>Nombre científico:<span style={elementStyle}>{animalData.scientific_name}</span></li>
                        <li style={titleStyle}>Especie:<span style={elementStyle}>{animalData.species.name}</span></li>
                        <li style={titleStyle}>Tamaño y peso:<span style={elementStyle}>{animalData.size}</span></li>
                    </ul>

                </div>
                <h1 style={titleStyle}>
                    Avistamientos
                </h1>
                <div>
                    <Sightings id={animalData.id} />
                </div>
                <h1 style={titleStyle}>
                    Fundaciones
                </h1>
                <Foundations />

            </div>
        </>

    )
}


export default AnimalDetail;