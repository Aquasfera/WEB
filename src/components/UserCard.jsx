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
    }, [ follow])
    
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

    return (

        <div className="col-md-4">
            <div className="card profile-card-3">
                <div className="background-block">
                    <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" className="background" />
                </div>
                <div className="profile-thumb-block">
                    <img src={props.avatar} alt="profile-image" className="profile" />
                </div>
                <div className="card-content">
                    <h2>{props.username}<small>Seguidores { followeds} Seguidos {followers}</small></h2>
                    <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a></div>
                        <button className=" icon-block" onClick={handleFollow}>{!follow ? 'Seguir' : 'Dejar de seguir'} </button>

                </div>
            </div>
        </div>

    )
}
