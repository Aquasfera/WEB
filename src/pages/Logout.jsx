import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Logout(){
    const navigate = useNavigate()

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

    return(<h1>Deslogeando...</h1>)
}

export default Logout;