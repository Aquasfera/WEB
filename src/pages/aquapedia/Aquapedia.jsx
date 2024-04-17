
import { Outlet } from "react-router-dom";
import NavheadAquapedia from "../../components/NavheadAquapedia";

function Aquapedia(){
    return(
        <>
            <NavheadAquapedia/>
            <Outlet/>
        </>
    )
}

export default Aquapedia;