import React from 'react'
import { useState, useEffect } from 'react'
import './UserCard.css'
export default function UserCard(props) {
    const API_URL = import.meta.env.VITE_API_URL;

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

        fetch(API_URL + 'follow/follower/' + 1 + '/followed/' + props.id)
            .then(res => res.json())
            .then(data => {
                setFollow(data)
            })
            .catch(error => console.error(error))
    }, [follow])

    const handleFollow = async (postId, currentLikes) => {
        try {
            if (follow) {
                fetch(API_URL + 'follow/follower/' + 1 + '/followed/' + props.id, {
                    method: 'DELETE',
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
                        followerId: 1,
                        followedId: props.id,
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
    const iconSize = {
        width: "25px",
        height: "25px"
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
    const titleStyle = {
        color: "#D2AD89",
        marginLeft: "1em",
        marginTop: "0.8em"
    }
    const textStyle = {
        
    }
    const hRule = {
        border: "2px solid white",
        marginInline: "1.5em",
        marginBlock: "1.5em"

    }
    const containerStyle = {
        paddingInline: "1.5em",
    }
    return (
        <div class="container">
            <section class=" my-2" style={sectionStyle}>
                <div class="card testimonial-card mt-2 mb-3" style={cardStyle}>
                    <div class="card-up aqua-gradient"></div>
                    <div class="avatar mx-auto white">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg" class="rounded-circle img-fluid"
                            alt="woman avatar"></img>
                    </div>
                    <div class="d-flex flex-column align-items-center justify-content-center card-body text-center" >
                        <h4 class="card-title font-weight-bold">{props.username}</h4>
                        <div className='d-flex flex-row justify-content-center'>
                            <span class="m-1">Seguidos: {followers}</span>
                            <span class="m-1">Seguidores: {followeds}</span>
                        </div>
                        <button className='btn btn-primary' onClick={() => handleFollow()}>{follow ? 'Dejar de seguir' : 'Seguir'} </button>
                    </div>
                </div>

            </section>
        </div>

    )
}
