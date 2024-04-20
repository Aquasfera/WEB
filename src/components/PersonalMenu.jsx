import { useContext, useState } from "react";
import Context from "../contexts/Context";
import pfp from "../assets/profilePics/0_cardinalFish.png"

import options from '../assets/icons/settings-icon.svg'
import newPost from '../assets/icons/add-image-icon.svg'
import logoutSvg from '../assets/icons/logout-svgrepo-com.svg'
import aquarium from '../assets/icons/aquarium.svg'
import { useNavigate } from "react-router-dom";

function PersonalMenu(){

    const {actualUser, logout} = useContext(Context);
    const [showMenu, setShowMenu] = useState(true);
    const navigate = useNavigate();

    return(
        <>
        <h1>{actualUser}</h1>
        <div style={{display: showMenu ? 'none' : 'flex'}}>
            <img src={logoutSvg} style={{width: '40px'}} onClick={() => logout}/>
            <img src={options} style={{width: '40px'}} onClick={() => navigate('/')}/>
            <img src={newPost} style={{width: '40px'}} onClick={() => navigate('/aquagram/newPost')}/>
            <img src={aquarium} style={{width: '40px'}} onClick={() => navigate('/aquagram/personal-profile')}/>
        </div>
        <img src={pfp} style={{width: "40px", padding: "2px"}} onClick={() => setShowMenu((showMenu ? false : true))}/>
        </>
    )
}

export default PersonalMenu;