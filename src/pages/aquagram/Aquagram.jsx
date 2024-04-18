import { useState, useEffect } from "react";
import NavHeadAquagram from "../../components/NavheadAquagram";
import Context from "../../contexts/Context.js";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


function Aquagram()
{
    const [actualUser, setActualUser] = useState(null);

    const navigate = useNavigate()

    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Cookie' : document.cookie,
        "Content-Type": "application/json",
      },
    };

    useEffect(() =>{
      console.log('document se viene', document.cookie)
        fetch('http://192.168.1.244:3000/api/refresh', options)
        .then(resp => resp.json())
        .then(data => {
          if(data.error){//Si no hay token
            console.log('No detecta token')
            //logout()
          }
          else{
            setActualUser(data)
            console.log('Usuario comprobado. Hola ', data)
        }}
        )
        .catch(err => logout())
      },[actualUser])
      
      
      const logout = () => {
        
          console.log("logout")
          fetch('http://192.168.1.244:3000/api/logout', {method: 'POST', credentials: 'include'})
          .then(resp => resp.json())
          .then(data => {
            console.log(data);})
          .catch(err => console.log(err))
          setActualUser(null)
          
          navigate('/login')
      }

    return(
        <Context.Provider value={{actualUser, setActualUser}}>    
            <NavHeadAquagram/>
            <Outlet/>
        </Context.Provider>
    )
}

export default Aquagram;