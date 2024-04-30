import AnimalCard from "../../components/AnimalCard.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading.jsx";
import Wallpaper from "../../assets/images/wallpaper.png"


function Animals() {
    const stickyTop = {
        top: "3.5em",
        backgroundColor: `rgba(87, 120, 158,0.4)`,
        paddingTop: "1em"
    }
    const bgcolor = {

        minHeight: "100vh",
        backgroundImage: `url(${Wallpaper})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    const titleStyle = {
        color: "#D2AD89",
        marginLeft: "1em",
        marginTop: "0.8em"
    }
    const textStyle = {
        color: "white",
        marginLeft: "1.6em",
        marginRight: "2em",
        marginTop: "1em",
        fontSize: "1.1em",
        fontWeight: "lighter",
    }
    const hRule = {
        border: "2px solid white",
        marginInline: "1.5em",
        marginBlock: "1.5em"

    }
    const containerStyle = {
        paddingInline: "1.5em",
    }

    const [animalData, setAnimalData] = useState([]);

    let { sea } = useParams()

    let seaID;
    switch (sea) {
        case "Mar Mediterráneo":
            seaID = 1;
            break;
        case "Mar Cantábrico":
            seaID = 2;
            break
        case "Océano Atlántico":
            seaID = 3;
            break
    }



    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL + 'animal/location/' + seaID);
                const jsonData = await response.json();
                setAnimalData(jsonData);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [])

    if (animalData[0] == null) {
        return <Loading />
    }

    let text;
    animalData.map(data => {
        data.locations.map(location => {
            if (sea === "Mar Mediterráneo") {
                text = location.description;
            }
            if (sea === "Oceáno Atlántico") {
                text = location.description;
            }
            if (sea === "Mar Cantábrico") {
                text = location.description;
            }


        })

    })

    return (
        <div style={bgcolor}>
            <div className=" container-fluid" style={stickyTop}>
                <h1 style={titleStyle}>{sea}</h1>
                <h5 style={textStyle}>{text}</h5>
                <hr style={hRule} />
            </div>

            <div style={containerStyle} className="grid gap-3">
                <div className="row">
                    {

                        animalData.map(function (e, index) {
                            return (
                                <div className="col-6 d-flex justify-content-center" key={index}><AnimalCard img={`${API_PHOTOS}${e.photos[0]?.url}`} name={e.name}></AnimalCard></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Animals;