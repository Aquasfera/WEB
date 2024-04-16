/* eslint-disable react/prop-types */

import { useState } from "react"
import { Link } from "react-router-dom"


function Post(props) {

    const bgcolor = {
        height: "auto",
        backgroundColor: "#0A141F"
    }

    const textColor = {
        color: "#CCDBDC",
    }

    const displayHeader = {
        display: "flex",
        justifyContent: "space-between",
    }

    const display = {
        display: "flex",
    }

    const iconSize = {
        width: "25px",
        height: "25px"
    }

    const imgFooterIcons = {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "15px"
    }

    const noMargin = {
        margin: "0px"
    }

    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        props.onLike();
        setLiked(!liked);
    };


    return (
        <div style={bgcolor}>
            <div className="container">
                <div className="post-header" style={displayHeader}>
                    <div className="post-username flex" style={display}>
                        <img className="user-avatar img-fluid" style={iconSize} src={props.avatar} />
                        <p className="username" style={textColor}>{props.username}</p>
                    </div>
                    <div className="post-location" style={display}>
                        <img className="location-icon img-fluid" style={iconSize} src="../src/assets/icons/location-icon.svg" />
                        <p className="location" style={textColor}>{props.location}</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0">
                            <img className="post-img img-fluid" src={props.img} style={noMargin} />
                        </div>
                    </div>
                </div>
                <div className="post-icons" style={imgFooterIcons}>
                    <div className="insta-icons">
                        <img className="heart-icon me-2" style={iconSize} src={!liked ? "../src/assets/icons/like-icon.svg" : "../src/assets/icons/fav-like-icon.svg"} onClick={handleLikeClick} />
                    </div>
                    <div className="encilopedia-icon flex" style={display}>
                        <Link to="/animals">
                            <img className="pedia-icon" src="../src/assets/icons/enciclopedia-icon.svg" style={iconSize} />
                        </Link>
                    </div>
                </div>

                <div className="photo-description mt-2">
                    <p className="description" style={textColor}>{props.comment}</p>

                </div>

            </div>

        </div>
    )


}

export default Post;