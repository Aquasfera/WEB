import Navhead from "../components/Navhead";
import data from "../fakedata/fakedata";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimalCard from "../components/AnimalCard";


function Animals() {

    const bgcolor = {

        height: "100vh",
        backgroundColor: "#0A141F"
    }
    const titleStyle = {
        color: "#D2AD89",
        marginLeft: "25px",
        marginTop: "20px"
    }
    const textStyle = {
        color: "white",
        marginLeft: "25px",
        marginRight: "20px",
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: "lighter"
    }
    const hRule = {
        border: "2px solid white",
        marginInline: "25px"

    }
    const containerStyle = {
        marginInline: "25px",
        padding: "0px",
        maxWidth: "430px"
    }
    const rowStyle = {
        maxWidth: "430px"
    }

    return (
        <div style={bgcolor}>
            <Navhead />
            <h1 style={titleStyle}>Mar<br />Mediterraneo</h1>
            <h5 style={textStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo, dicta inventore perferendis quam ullam nobis qui eum </h5>
            <hr style={hRule} />
            <div className="grid gap-4">
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