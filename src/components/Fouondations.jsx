import Fundaciones from "../assets/asociaciones.json"
import FoundationCard from "./FoundationCard"

const API_URL = import.meta.env.VITE_API_URL;

function Foundations() {
  return (
    <div className="container-fluid pt-3 pb-5">
      <div className="grid">
        <div className="row">
          {
            Fundaciones.map((e)=>{
              return(
                <FoundationCard key={e.id} name={e.name} description={e.description} img={e.img} dir={e.dir}/>
              )
              
            })
          }
        </div>
      </div>
    </div>

  );
}

export default Foundations;