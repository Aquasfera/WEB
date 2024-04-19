
import React, { useEffect, useState } from 'react'
import imgSVG from '../../assets/images/ods-3.png'
import TabsComponent from '../../components/TabsComponent'
import Footer from '../../components/Footer'
export default function PersonalProfile() {
    const imgStyle = {
        width: "4em",
        height: "auto",
    }
    const [followers, setFollowers] = useState(0)
    const [followeds, setFolloweds] = useState(0)
    const API_URL = import.meta.env.VITE_API_URL;
    const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO;
    useEffect(() => {
        fetch(API_URL + 'follow/count/follower/' + 1)
            .then(res => res.json())
            .then(data => {
                setFollowers(data)
                console.log(data)
            })
        fetch(API_URL + 'follow/count/followed/' + 1)
            .then(res => res.json())
            .then(data => {
                setFolloweds(data)
                console.log(data)
            })
    }, [])
    return (
        <>
            <div className="container-fluid">
                <section className="row">
                    <div className='d-flex justify-content-center align-items-start'>
                        <div className="col-8 col-md-6 col-lg-4 mt-2 d-flex flex-column flex-wrap ">
                            <h3 className="">Nombre de usuario</h3>
                            <div className='pt-2 d-flex flex-row flex-wrap'>
                                <p className='me-1'>Seguidores {followers}</p>
                                <p className='me-1'>Seguidos {followeds} </p>
                            </div>
                        </div>
                        <div className='col-4 col-md-6 col-lg-8 mt-2'>
                            <img src={imgSVG} className='img-fluid' style={imgStyle} alt="Foto de perfil" />
                        </div>
                    </div>
                </section>
                <section className='row'>
                    <TabsComponent />
                </section>

            </div>

                <Footer />
                
        </>
    )
}
