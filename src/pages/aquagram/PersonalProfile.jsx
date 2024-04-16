
import React from 'react'
import imgSVG from '../assets/images/ods-3.png'
import TabsComponent from '../components/TabsComponent'
export default function PersonalProfile() {
    const imgStyle = {
        width: "4em",
        height: "auto",
    }
  return (
    <>
    <div className="container-fluid">
        <section className="row">
                <div className='d-flex justify-content-center align-items-start'>
                <div className="col-8 col-md-6 col-lg-4 mt-2 d-flex flex-column flex-wrap ">
                    <h3 className="">Nombre de usuario</h3>   
                    <div className='pt-2 d-flex flex-row flex-wrap'>
                        <p className='me-1'>Seguidores 0</p>
                        <p className='me-1'>Publicaciones 0</p>
                    </div> 
                </div>
                <div className='col-4 col-md-6 col-lg-8 mt-2'>
                    <img src={imgSVG} className='img-fluid'style={imgStyle} alt="Foto de perfil" />
                </div>
            </div>
        </section>
        <section className='row'>
            <TabsComponent />
        </section>
    </div>
    </>
  )
}
