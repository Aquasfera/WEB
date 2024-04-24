import AnimalCard from "../../components/AnimalCard.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading.jsx";


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
                console.log("hola")
                console.log(jsonData)
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
    switch (sea) {
        case "Mar Mediterráneo":
            text = "Presenta una gran diversidad marina y alberga más de 10.000 especies acuáticas. Pese a que la mayoría provienen del océano Atlántico, como la orca (Orcinus orca) o el delfín nariz de botella (Tursiops truncatus), hay otras especies propias de este mar, como la foca monje (Monachus monachus) o el mejillón mediterráneo (Mytilus galloprovincialis). Acoge una gran variedad de ecosistemas entre los que se encuentran arrecifes de coral, praderas de posidonia o fosas, condicionados por la mayor temperatura y salinidad que presenta este mar. El Mediterráneo ocupa tan solo un 0,7 % de la superficie total del planeta, pero acoge a cerca de un 9,8 % de la diversidad marina a nivel mundial.";
            break;
        case "Mar Cantábrico":
            text = "Como se ha mencionado el mar Cantábrico forma la zona de transición subtropical/boreal del Atlántico oriental, donde se encuentran especies típicas de aguas templadas del sur junto con las de origen norte. Como consecuencia, existen altos índices de biodiversidad en comparación con las áreas adyacentes. A ello debemos añadir que la complejidad topográfica y la amplia gama de sustratos en su plataforma continental dan como resultado muchos tipos diferentes de hábitat. También es la zona de desove en invierno y primavera de algunas especies, como la merluza, el gallo, el besugo, la caballa, el jurel y la anchoa, y la zona de alimentación de otras, por ejemplo, el atún. Estas especies junto con el rape y la cigala son los principales componentes de las capturas de la flota pesquera que faena estas aguas. El número de especies de peces disminuye progresivamente con la profundidad, siendo las aguas costeras las que tienen una mayor productividad en contraste con los fenómenos inversos que aparecen en los invertebrados, que prefieren aguas más profundas y sustratos fangosos debido a su predominio de hábitos alimentarios deltívoros.";
            break;
        case "Océano Atlántico":
            text = "Es el océano que separa América, al oeste, de Europa y África, al este. Se extiende desde el océano Glacial Ártico, en el norte, hasta el océano Antártico, en el sur. Es el segundo océano más extenso de La Tierra después del océano Pacífico, ocupa el 20% de la superficie del planeta y el 26% del total de tierras sumergidas. Es además el océano más joven del planeta, formado hace 200 millones de años por la división del supercontinente Pangea. La temperatura del océano Atlántico es variada y muy cambiante, debido a su enorme extensión. De hecho, el Atlántico recorre el planeta de norte a sur pasando por el Ecuador. En algunos lugares, la temperatura llega a descender hasta los -2ºC, mientras que en las regiones cálidas el agua llega a tener más de 30º C.";
            break;


    }

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