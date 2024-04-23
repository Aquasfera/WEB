import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sightings(props) {
    const containerStyle = {
        paddingInline: "1.5em",
    }

    const navigate = useNavigate()
    const [animalPosts, setanimalPosts] = useState([]);


    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL + 'post/animal/' + props.id);
                const jsonData = await response.json();
                setanimalPosts(jsonData);
                console.log(jsonData)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [])

    if (animalPosts[0] == null) {
        return <h1>Cargando ....</h1>
    }

    return (

        <div style={containerStyle} className="grid gap-3">
            <div className="row">

                {

                    animalPosts.map(function (e, index) {
                        return (

                                <div className="col-6 d-flex justify-content-center" key={index}> <img src={`${API_PHOTOS + e.url}`} onClick={()  => navigate("/aquagram")} className="img-fluid mt-3 rounded" /></div>
                        )
                    })
                }
            </div>
        </div>


    )
}


export default Sightings;