import { Outlet } from "react-router-dom";
import NavheadAquapedia from "../../components/NavheadAquapedia.jsx";


function Aquapedia(){
    return(
        <>
            <NavheadAquapedia/>
            <Outlet/>
        </>
    )
}

export default Aquapedia;