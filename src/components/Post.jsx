import Navhead from "./Navhead";
import data from "../fakedata/fakedata";
import { useEffect, useState } from "react";

function Post() {
    const [photos, setPhotos] = useState([]);

    const bgcolor = {

        height: "100vh",
        backgroundColor: "#0A141F"
    }


    return (
        <div style={bgcolor}>
            <Navhead />

        </div>
    )


}

export default Post;