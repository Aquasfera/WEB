import Navhead from "../components/Navhead";

function AnimalDetail() {
    
    const bgcolor = {

        minHeight: "100vh",
        backgroundColor: "#0A141F"
    }
    const titleStyle = {
        color: "#D2AD89",
        marginLeft: "1em",
        paddingTop: "0.8em"
    }
    return (
        <> 
        <Navhead/>
        <div className="container-fliud" style={bgcolor}>
            <h1 style={titleStyle}>
                Animal Test
            </h1>
        </div>
        </>
      
    )
}


export default AnimalDetail;