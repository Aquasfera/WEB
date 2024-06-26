import { useContext, useState } from "react";
import Context from "../contexts/Context";

import options from '../assets/icons/options.svg'
import newPost from '../assets/icons/addNewPost.svg'
import logoutSvg from '../assets/icons/logout.svg'
import aquarium from '../assets/icons/personalProfile.svg'
import feed from '../assets/icons/feed.svg'

import { useNavigate } from "react-router-dom";

import PFPPaths from '../assets/profilePics/profilePicsPaths.json'

function PersonalMenu(){
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;
    const {actualUser, logout} = useContext(Context);
    const [showMenu, setShowMenu] = useState(true);
    const navigate = useNavigate();
    console.log(API_PHOTOS,actualUser.avatar)
    return(
        <>
        <h1>{actualUser.name}</h1>
        <div style={{display: showMenu ? 'none' : 'flex', gap: '15px',  justifyContent: 'center', alignItems: 'center'}}>
            <img src={logoutSvg} style={{width: '20px', transform: "scaleX(-1)"}} onClick={() => logout()}/>
            <img src={newPost} style={{width: '25px'}} onClick={() => {setShowMenu(true); navigate('/aquagram/newPost')}}/>
            <img src={feed} style={{width: '25px'}} onClick={() => {setShowMenu(true); navigate('/aquagram')}}/>
            <img src={aquarium} style={{width: '25px'}} onClick={() => {setShowMenu(true); navigate('/aquagram/personal-profile')}}/>
        </div>

        <img src={`${API_PHOTOS}${actualUser.avatar}`} style={{width: "40px", padding: "2px"}} onClick={() => setShowMenu((showMenu ? false : true))}/>
        </>
    )
}

export default PersonalMenu;