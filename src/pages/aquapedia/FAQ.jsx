import NavHeadAquapedia from '../../components/NavheadAquapedia';
import Accordion from 'react-bootstrap/Accordion';
import './styles/accordionStyle.css';

import "./styles/FAQ.css";

const FAQ = () => {


  const faqData = [
    {
      question: "¿Cómo puedo utilizar el mapa interactivo para explorar las diferentes regiones marinas (Mar Mediterráneo, Mar Cantábrico y Océano Atlántico)?",
      answer:
        "Simplemente haz clic en la región que te interese en el mapa interactivo y se mostrará información sobre las especies marinas que habitan en esa área.",
    },
    {
      question: "¿Cómo puedo acceder a las fundaciones que colaboran para conservar el ecosistema marino desde la página?",
      answer:
        "En la sección de Fundaciones, dentro de la información de cada especie, podrás encontrar enlaces o información sobre las organizaciones que trabajan para conservar el ecosistema marino. Simplemente haz clic en el enlace proporcionado para obtener más detalles sobre su trabajo y cómo puedes apoyarlos.",
    },
    {
      question: "¿Necesito estar registrado para poder ver las fotografías que suben los usuarios?",
      answer:
        "Si quieres acceder a las fotografías mediante Aquagram si necesitarás registrarte. En el caso de que quieras visualizar las imágenes desde Aquapedia no es necesario el registro",
    },
    {
      question: "¿Cómo puedo acceder a la información de cada especie?",
      answer:
        "Dentro de cada área geográfica bastará con hacer clic en la especie de la que quiero obtener más información",
    },
    {
      question: "¿Cómo puedo subir una imagen?",
      answer:
        "Accede al formulario para postear una nueva imagen y selecciona la imagen que quieres postear. Deberás indicar el tipo de especie y la ubicación de la misma.",
    },
    {
      question: "¿Cómo puedo contratar al equipo?",
      answer:
        "En la sección Sobre Nosotros puedes encontrar el contacto (LinkedIn y GitHub) de cada uno de los miembros del equipo",
    },
  ];

  return (
    <div className="box0">
      <NavHeadAquapedia />
      <h2 className="titulo mb-4">Preguntas Frecuentes</h2>

      <Accordion className='p-4 pt-0' >
        {
          faqData.map((data, index) => {
            return (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{data.question}</Accordion.Header>
                <Accordion.Body>
                  {data.answer}
                </Accordion.Body>
              </Accordion.Item>
            )


          })
        }
      </Accordion>


    </div>
  );
};

export default FAQ;
