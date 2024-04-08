import Navhead from "../components/Navhead";
import data from "../fakedata/fakedata";
import AnimalCard from "../components/AnimalCard";


function Animals() {

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
        marginInline: "1.5em",
    }


    return (
        <div style={bgcolor}>
            <Navhead />
            <div className="sticky-top">
                <h1 style={titleStyle}>Mar<br />Mediterraneo</h1>
                <h5 style={textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo, dicta inventore perferendis quam ullam nobis qui eum </h5>
                <hr style={hRule} />
            </div>

            <div style={containerStyle} className="grid gap-3">
                <div className="row">


                    {
                        data.map(function (e, index) {
                            return (
                                <div className="col-4" key={index}><AnimalCard img={e.img} name={e.name}></AnimalCard></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default Animals;