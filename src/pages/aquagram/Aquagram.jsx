import { useEffect, useState } from "react";
import { Outlet, redirect } from "react-router-dom";
import Context from "../../contexts/Context";
import NavheadAquagram from "../../components/NavheadAquagram";
function Aquagram(){


    const [actualUser, setActualUser] = useState(null);

    useEffect(() =>{
        fetch('http://192.168.1.244:3000/api/refresh')
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

      
    return (
        <Context.Provider value={{actualUser, setActualUser}}>
            <NavheadAquagram/>
            <Outlet/>
        </Context.Provider>
    )
}

export default Aquagram;