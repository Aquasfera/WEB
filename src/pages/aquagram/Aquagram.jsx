import { useState, useEffect } from "react";
import NavHeadAquagram from '../../components/NavheadAquagram.jsx';
import Context from "../../contexts/Context.js";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import Cookie from 'js-cookie';
import { Button } from "bootstrap";

function Aquagram()
{
    const API_URL = import.meta.env.VITE_API_URL;

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

      fetch(API_URL + 'refresh', options)
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
          fetch(API_URL + 'logout', {method: 'POST', credentials: 'include'})
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