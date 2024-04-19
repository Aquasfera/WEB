import AnimalCard from "../../components/AnimalCard.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Animals() {
    const stickyTop = {
        top: "3.5em",
        backgroundColor: "#0A141F",
        paddingTop: "1em"
    }
    const bgcolor = {

        minHeight: "100vh",
        backgroundColor: "#0A141F"
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
        fontWeight: "lighter"
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
    let {sea} = useParams()
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO ;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL +'animal');
                const jsonData = await response.json();
                setAnimalData(jsonData);
                console.log("hola")
                console.log(jsonData)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [])

    if (animalData[0] == null) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div style={bgcolor}>
            <div  className=" container-fluid"style={stickyTop}>
                <h1 style={titleStyle}>{sea}</h1>
                <h5 style={textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo, dicta inventore perferendis quam ullam nobis qui eum </h5>
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