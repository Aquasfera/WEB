import React from 'react'
import bgImage from "../../assets/images/landing-bg.png"
import ods4 from "../../assets/images/ods-4.png"
import ods13 from "../../assets/images/ods-13.png"
import ods14 from "../../assets/images/ods-14.png"
import teamData from "../../assets/team.json"
import TeamCard from '../../components/TeamCard'

export default function AboutUs() {

  const bgcolor = {

    minHeight: "100vh",
    backgroundColor: "#0A141F"
}
  const titleStyle = {
    fontSize: "40px",
    lineHeight: "1.4",
    color: "#CCDBDC"
  }
  const textStyle = {
    fontSize: "20px",
    lineHeight: "1.6",
    color: "#CCDBDC"
  }
  return (
    <>
      <section className='container-fluid' style={bgcolor}>
        <section className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12 '>
            <h1 style={titleStyle}>Sobre Nosotros</h1>
            <p style={textStyle}>El proyecto Aquasfera nace con un objetivo claro: explorar y difundir la riqueza de la vida marina que habita en las costas españolas. Esta iniciativa única combina dos elementos esenciales: una enciclopedia marina exhaustiva que proporciona información detallada sobre las especies marinas que habitan en nuestras aguas, y una vibrante plataforma de redes sociales donde los usuarios pueden compartir sus experiencias y avistamientos marinos a través de fotografías.</p>

            <p style={textStyle}> La parte informativa de Aquasfera actúa como una guía invaluable, ofreciendo datos precisos y curiosidades sobre una amplia variedad de criaturas marinas, desde peces coloridos hasta majestuosas ballenas. Esta enciclopedia virtual no solo educa, sino que también promueve la conservación marina al aumentar la conciencia sobre la diversidad y la fragilidad de nuestros ecosistemas acuáticos.</p>

            <p style={textStyle}>Por otro lado, la función de red social de Aquasfera permite a los entusiastas del mar conectarse, compartir sus descubrimientos y contribuir a una comunidad apasionada por la vida marina. Los usuarios pueden cargar fotos de sus encuentros con la vida marina, desde el avistamiento de delfines juguetones hasta el descubrimiento de criaturas marinas raras. Esta plataforma no solo fomenta el intercambio de conocimientos, sino que también inspira a otros a explorar y apreciar la belleza de los océanos españoles.</p>

            <p style={textStyle}> En resumen, Aquasfera es mucho más que un proyecto; es un llamado a la acción para proteger y preservar nuestros océanos, mientras celebramos la asombrosa biodiversidad que habita en ellos.</p>
          </div>
        </section>
        <section className='row pt-3'>
          <div className='col-sm-12 col-md-12 col-lg-12  '>
            <h1 style={titleStyle}>Nuestras ODS</h1>
            <div className='d-flex flex-wrap justify-content-center'>
              <img className='img-fluid p-1 rounded' style={{maxWidth: '300px', maxHeight: '300px'}} src={ods4} alt='ODS'></img>
              <img className='img-fluid p-1 rounded' style={{maxWidth: '300px', maxHeight: '300px'}} src={ods13} alt='ODS'></img>
              <img className='img-fluid p-1 rounded' style={{maxWidth: '300px', maxHeight: '300px'}} src={ods14} alt='ODS'></img>
            </div>
          </div>
        </section>
        <section className='row pt-3'>

          <h1 style={titleStyle}>Nuestro equipo</h1>
          <div className='col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap justify-content-center pb-3'>
            {
              teamData.map((team, index) => {
                return (
                  <TeamCard key={index} linkedin={team.linkedin} name={team.name} photo={'src/assets/workers/' + team.photo} github={team.github} style={textStyle}></TeamCard>
                )
              })
            }
          </div>
        </section>
      </section>
    </>
  )
}
