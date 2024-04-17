
import FoundationCard from "./FoundationCard"

const jaja = [1,2,3,4];
function Foundations() {
  return (
    <div className="container-fluid pt-3 pb-5">
      <div className="grid">
        <div className="row">
          {
            jaja.map((e,index)=>{
              return(
                <FoundationCard key={index}/>
              )
              
            })
          }
        </div>
      </div>
    </div>

  );
}

export default Foundations;