import { useState, useEffect } from "react";
import NavHeadAquapedia from "../../components/NavheadAquapedia.jsx";
import Context from "../../contexts/Context.js";
import { Outlet, redirect } from "react-router-dom";

function Aquagram()
{
    const [actualUser, setActualUser] = useState(null);
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() =>{
        fetch(API_URL + 'refresh')
        .then(resp => resp.json())
        .then(data => {
          if(data.error){
            logout()
          }
          else{
            setActualUser(data)
        }}
        )
        .catch(err => logout())
      },[actualUser])
      
      
      const logout = () => {
        redirect('/login')
        //   console.log("logout")
        //   fetch('http://192.168.1.244:3000/api/logout', {credentials: 'include'})
        //   .then(resp => resp.json())
        //   .then(data => {
        //     console.log(data);})
        //   .catch(err => console.log(err))
      
        //   setActualUser(null)
        //   redirect('/login')
      }

    return(
        <Context.Provider value={{actualUser, setActualUser}}>    
            <NavHeadAquapedia/>
            <Outlet/>
        </Context.Provider>
    )
}

export default Aquagram;