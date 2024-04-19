import { useState, useEffect } from "react";
import NavHeadAquagram from "../../components/NavheadAquagram";
import Context from "../../contexts/Context.js";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import Cookie from 'js-cookie';
import { Button } from "bootstrap";

function Aquagram()
{
    const [actualUser, setActualUser] = useState(null);
    const navigate = useNavigate()

    const token = Cookie.get('tokenCookie');
    
    useEffect(() =>{      
    
      const options = {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token: token})
      };      
      
      console.log('este token', token)

      fetch('http://192.168.1.244:3000/api/refresh', options)
      .then(resp => resp.json())
      .then(resp => {
        if(resp.error){//Si no hay token
          console.log('No detecta token')
          logout()
        }
        else{
          setActualUser(resp)
          console.log('Usuario comprobado.', resp)
      }}
      )
      .catch(err => logout())
      },[])

      const logout = () => {
        useEffect(() => {
    
          console.log("Logout intento")
          fetch('http://192.168.1.244:3000/api/logout', {method: 'POST', credentials: 'include'})
          .then(resp => resp.json())
          .then(data => {
                  console.log(data);})
          .catch(err => Cookies.remove('tokenCookie'))
          setActualUser(null)
              
          console.log("Logout hecho")
          navigate('/login')
      ,[]})
      }

    return(
        <Context.Provider value={{actualUser, setActualUser}}>  
            <NavHeadAquagram/>
            <Outlet/>
        </Context.Provider>
    )
}

export default Aquagram;