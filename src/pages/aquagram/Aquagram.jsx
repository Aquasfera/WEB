import { useState, useEffect } from "react";
import NavHeadAquagram from "../../components/NavheadAquagram";
import Context from "../../contexts/Context.js";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import Cookie from 'js-cookie';

function Aquagram()
{
    const [actualUser, setActualUser] = useState(null);
    const navigate = useNavigate()

    const token = Cookie.get('tokenCookie');

    console.log('El token es ', token)
    
    useEffect(() =>{      
    
      const options = {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token: token})
      };      
      

      fetch('http://192.168.1.244:3000/api/refresh', options)
      .then(resp => resp.json())
      .then(data => {
        if(data.error){//Si no hay token
          console.log('No detecta token')
          navigate('/logout')
        }
        else{
          setActualUser(data)
          console.log('Usuario comprobado.', data)
      }}
      )
      .catch(err => navigate('/logout'))
      },[])

    return(
        <Context.Provider value={{actualUser, setActualUser}}>    
            <NavHeadAquagram/>
            <Outlet/>
        </Context.Provider>
    )
}

export default Aquagram;