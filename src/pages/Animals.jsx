import Navhead from "../components/Navhead";
import AnimalCard from "../components/AnimalCard";
import { useEffect, useState } from "react";

import data from "../fakedata/fakedata.js";

function Animals() {
    const stickyTop={
         top :  "3.5em",
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
        marginInline: "1.5em" ,
        marginBlock: "1.5em"  

    }
    const containerStyle = {
         paddingInline: "1.5em",
    }

    const [animalData, setAnimalData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch('http://192.168.1.244:3000/api/animal');
              const jsonData = await response.json();
              setAnimalData(jsonData);
              console.log("hola")
              console.log(jsonData)
            } catch (error) {
              console.error(error);
            }
          };
          fetchData()
    },[])

    return (
        <div style={bgcolor}>
            <Navhead />
            <div  className=" container-fluid"style={stickyTop}>
                <h1 style={titleStyle}>Mar<br />Mediterraneo</h1>
                <h5 style={textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo, dicta inventore perferendis quam ullam nobis qui eum </h5>
                <hr style={hRule} />
            </div>

            <div style={containerStyle} className="grid gap-3">
                <div className="row">
                    {
                        data.map(function (e, index) {
                            return (
                                <div className="col-6 d-flex justify-content-center" key={index}><AnimalCard img={e.img} name={e.name}></AnimalCard></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Animals;