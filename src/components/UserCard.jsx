import React from 'react'
import { useState, useEffect,useContext } from 'react'
import './UserCard.css'
import Context from "../contexts/Context";

export default function UserCard(props) {
    const API_URL = import.meta.env.VITE_API_URL;
    const API_URL_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;
    const {actualUser, logout} = useContext(Context);   
    const [followers, setFollowers] = useState(0)
    const [followeds, setFolloweds] = useState(0)
    const [follow, setFollow] = useState(false)
    useEffect(() => {
        fetch(API_URL + 'follow/count/follower/' + props.id)
            .then(res => res.json())
            .then(data => {
                setFollowers(data)
            })
            .catch(error => console.error(error))
        fetch(API_URL + 'follow/count/followed/' + props.id)
            .then(res => res.json())
            .then(data => {
                setFolloweds(data)
            })
            .catch(error => console.error(error))

        fetch(API_URL + 'follow/follower/' + props.actualUser.id + '/followed/' + props.id)
            .then(res => res.json())
            .then(data => {
                setFollow(data)
            })
            .catch(error => console.error(error))
    }, [follow])

    const handleFollow = async (postId, currentLikes) => {
        try {
            if (follow) {
                fetch(API_URL + 'follow/follower/' + props.actualUser.id + '/followed/' + props.id, {
                    method: 'DELETE',
                    body: JSON.stringify({
                        token: props.token
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        setFollow(null)
                    })
                    .catch(error => console.error(error))
            } else {
                fetch(API_URL + 'follow', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        followerId: props.actualUser.id,
                        followedId: props.id,
                        token: props.token
                    })
                })
                    .then(response => response.json())
                    .then(data => {
                        setFollow(data)
                    })
                    .catch(error => console.error(error))
            }
        } catch (error) {
            console.error('Error al actualizar los likes del post:', error);
        }
    }

    const sectionStyle = {
        maxWidth: "23rem",

    }
    const cardStyle = {
        backgroundColor: "#273654",
        color: "white",
        fontSize: "1.1em",
        fontWeight: "lighter"
    }

    return (
        <div className="container">
            <section className=" my-2" style={sectionStyle}>
                <div className="card testimonial-card mt-2 mb-3" style={cardStyle}>
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                    <img src={`${API_URL_PHOTOS}${props.avatar}`} style={{width: "6.3em", height:"auto" }}/>

                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center card-body text-center" >
                        <h4 className="card-title font-weight-bold">{props.username}</h4>
                        <div className='d-flex flex-row justify-content-center'>
                            <span className="m-1">Seguidos: {followers}</span>
                            <span className="m-1">Seguidores: {followeds}</span>
                        </div>
                        <button className='btn btn-primary' onClick={() => handleFollow()}>{follow ? 'Dejar de seguir' : 'Seguir'} </button>
                    </div>
                </div>

            </section>
        </div>

    )
}
