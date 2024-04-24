
import React, { useEffect, useState,useContext } from 'react'
import TabsComponent from '../../components/TabsComponent'
import Footer from '../../components/Footer'
import Context from '../../contexts/Context'
import PFPPaths from '../../assets/profilePics/profilePicsPaths.json'

export default function PersonalProfile() {
    const imgStyle = {
        width: "4em",
        height: "auto",
    }
    const [followers, setFollowers] = useState(0)
    const [followeds, setFolloweds] = useState(0)
    const [user, setUser] = useState({})
    const {actualUser, token} = useContext(Context);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;
    useEffect(() => {
        fetch(API_URL + 'user/'+ actualUser.id)
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
        fetch(API_URL + 'follow/count/follower/' + actualUser.id)
            .then(res => res.json())
            .then(data => {
                setFollowers(data)
            })
        fetch(API_URL + 'follow/count/followed/' + actualUser.id)
            .then(res => res.json())
            .then(data => {
                setFolloweds(data)
            })
    }, [])
    const bgcolor = {
        
        minHeight: "100vh",
        backgroundColor: "#0A141F"
    }
    const titleStyle = {
        color: "#D2AD89",
        marginLeft: "1em",
        marginTop: "0.8em"
    }
    const textStyle = {
        color: "white",
        fontSize: "1.1em",
        fontWeight: "lighter"
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
        <>
            <div className="container-fluid" style={bgcolor}>
                <section className="row ">
                    <div className='d-flex mt-4 mb-4'>
                        <div className="col-8 col-md-6 col-lg-4 mt-2 d-flex align-items-center flex-column flex-wrap ">
                            <h3 className="d-flex justify-content-start" style={textStyle}>{user.username}</h3>
                            <div className='pt-2 d-flex flex-row flex-wrap'>
                                <p className='me-1' style={textStyle}>Seguidores {followers}</p>
                                <p className='me-1' style={textStyle}>Seguidos {followeds} </p>
                            </div>
                        </div>
                        <div className='col-4 col-md-6 col-lg-8 mt-2'>
                            <img src={"src/assets/profilePics/" + PFPPaths[actualUser.avatar]} style={{width: "40px", padding: "2px"}}  className='img-fluid' alt="Foto de perfil" />
                        </div>
                    </div>
                </section>
                <section className='row'>
                    <TabsComponent actualUser={actualUser} token={token} textStyle={textStyle} />
                </section>

            </div>

                <Footer />
                
        </>
    )
}
