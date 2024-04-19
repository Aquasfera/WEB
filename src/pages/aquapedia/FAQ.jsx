

import "./styles/FAQ.css";

const FAQ = () => {
  

  
  const faqData = [
    {
      question: "¿Por qué lo usamos?",
      answer:
        "Se utiliza para llenar espacios en el diseño y proporcionar un aspecto preliminar.",
    },
    {
      question: "¿Por qué lo usamos?",
      answer:
        "Se utiliza para llenar espacios en el diseño y proporcionar un aspecto preliminar.",
    },
    {
      question: "¿Por qué lo usamos?",
      answer:
        "Se utiliza para llenar espacios en el diseño y proporcionar un aspecto preliminar.",
    },
    {
      question: "¿Por qué lo usamos?",
      answer:
        "Se utiliza para llenar espacios en el diseño y proporcionar un aspecto preliminar.",
    },
    {
      question: "¿Por qué lo usamos?",
      answer:
        "Se utiliza para llenar espacios en el diseño y proporcionar un aspecto preliminar.",
    },
    {
      question: "¿Por qué lo usamos?",
      answer:
        "Se utiliza para llenar espacios en el diseño y proporcionar un aspecto preliminar.",
    },
  ];

  return (
    <div className="box0">
      <h2 className="titulo">Preguntas Frecuentes</h2>

      {faqData.map((faq, index) => (
        <div key={index} className="faq-question caja1">
          <h4 className="pointer click tituloPreg">
            {faq.question}
          </h4>

          <div className="answer textwhite">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
