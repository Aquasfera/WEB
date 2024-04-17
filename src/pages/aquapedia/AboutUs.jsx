import React from 'react'
import NavheadAquapedia from '../../components/NavheadAquapedia'
import bgImage from "../../assets/images/landing-bg.png"
import ods3 from "../../assets/images/ods-3.png"
import ods4 from "../../assets/images/ods-4.png"
import ods13 from "../../assets/images/ods-13.png"
import ods14 from "../../assets/images/ods-14.png"
import teamData from "../../assets/team.json"
import TeamCard from '../../components/TeamCard'
import Footer from '../../components/Footer'

export default function AboutUs() {
  const backgroundimage = {
    minHeight: "100vh",
    height: "auto",
    backgroundImage: `url(${bgImage})`
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
      <NavheadAquapedia />
      <section className='container-fluid' style={backgroundimage}>
        <section className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12 '>
            <h1 style={titleStyle}>Sobre Nosotros</h1>
            <p style={textStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
              pharetra nunc. Nullam nec nisl in dolor ultricies ultrices. Phasellus
              varius, dui nec lacinia tincidunt, nunc nisl tincidunt justo, a
              fermentum nisl libero sit amet mi. Donec quis nisl ut nisl fermentum
              fermentum. Nullam nec nisl in dolor ultricies ultrices. Phasellus varius,
              dui nec lacinia tincidunt, nunc nisl tincidunt justo, a fermentum nisl
              libero sit amet mi. Donec quis nisl ut nisl fermentum fermentum.
            </p>
          </div>
        </section>
        <section className='row pt-3'>
          <div className='col-sm-12 col-md-12 col-lg-12 '>
            <h1 style={titleStyle}>Nuestras ODS</h1>
            <div className='d-flex flex-wrap justify-content-center'>
              <img className='img-fluid p-1 rounded' src={ods3} alt='ODS'></img>
              <img className='img-fluid p-1 rounded' src={ods4} alt='ODS'></img>
              <img className='img-fluid p-1 rounded' src={ods13} alt='ODS'></img>
              <img className='img-fluid p-1 rounded' src={ods14} alt='ODS'></img>
            </div>
          </div>
        </section>
        <section className='row pt-3'>

          <h1 style={titleStyle}>Nuestro equipo</h1>
          <div className='col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap justify-content-center '>
            {
              teamData.map((team, index) => {
                return (
                  <TeamCard key={index} linkedin={team.linkedin} name={team.name} photo={team.photo} github={team.github} style={textStyle}></TeamCard>
                )
              })
            }
          </div>
        </section>
      </section>
      <Footer></Footer>
    </>
  )
}
