/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Context from "../contexts/Context"


function Post(props) {

    const {actualUser} = useContext(Context);
    
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
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;
    const animalLink = `/aquapedia/${props.location}/${props.animal}`
    const [like, setLike] = useState();
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        fetch(API_URL + 'like/user/' + actualUser.id +'/post/' + props.id)
            .then(response => response.json())
            .then(data => {
                setLike(data)
                console.log(data)
            })
            .catch(error => console.error(error))
        fetch(API_URL + 'like/count/' + props.id)
            .then(response => response.json())
            .then(data => {
                setLikeCount(data)
                console.log(data)
            })
            .catch(error => console.error(error))
    }, [like])
    const handleLike = async (postId, currentLikes) => {
        try {
            if (like) {
                fetch(API_URL + 'like/user/' + actualUser.id + '/post/' + props.id, {
                    method: 'DELETE',
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setLike(null)
                    })
                    .catch(error => console.error(error))
            } else {
                fetch(API_URL + 'like', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: actualUser.id,
                        postId: props.id,
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setLike(data)
                    })
                    .catch(error => console.error(error))
            }
        } catch (error) {
            console.error('Error al actualizar los likes del post:', error);
        }
    }


    return (
        <div className="pb-5" style={bgcolor}>
            <div className="post-header" style={displayHeader}>
                <div className="post-username flex" style={display}>
                    <img className="user-avatar img-fluid" style={iconSize} src={props.avatar} />
                    <p className="username" style={textColor}>{props.username}</p>
                </div>
                <div className="post-location" style={display}>
                    <img className="location-icon img-fluid" style={iconSize} src="../src/assets/icons/old/location-icon.svg" />
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
                    <img className="heart-icon me-2" style={iconSize} src={!like ? "../src/assets/icons/old/like-icon.svg" : "../src/assets/icons/old/fav-like-icon.svg"} onClick={handleLike} />
                    <span className="like-count" style={textColor}>{likeCount}</span>
                </div>
                <div className="encilopedia-icon flex" style={display}>
                    <Link to={animalLink}>
                        <img className="pedia-icon" src="../src/assets/icons/old/enciclopedia-icon.svg" style={iconSize} />
                    </Link>
                </div>
            </div>

            <div className="photo-description mt-2">
                <p className="description m-0" style={textColor}>{props.comment}</p>
            </div>
        </div>
    )


}

export default Post;