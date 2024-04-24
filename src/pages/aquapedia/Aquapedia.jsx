import { Outlet, ScrollRestoration } from "react-router-dom";
import NavheadAquapedia from "../../components/NavheadAquapedia.jsx";


function Aquapedia(){
    return(
        <>
            <NavheadAquapedia/>
            <Outlet/>
            <ScrollRestoration/>
        </>
    )
}

export default Aquapedia;