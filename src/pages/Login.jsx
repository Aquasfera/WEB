import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO ;

import "./aquagram/styles/Login.css";
import Cookie from 'js-cookie';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password,
    };

    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    };
    fetch(API_URL + "login", options)
      .then((res) => res.json())
      .then(res => {
        if(res.error){
          console.log('Credenciales mal.')
        }
        else{
          Cookie.set('tokenCookie', res, { expires: 180000 });
          navigate("/aquagram");
        }
      })
      .catch((err) => console.log('Fallo de login : ' + err));
  };

  return (
    <div className="box">
      <form
        onSubmit={login}
        className="col-lg-12 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <div className="card-body">
            <h2 className="text-center p-3 letraBlanca login">LOGIN</h2>
            <div className="text-center">
              <label
                htmlFor="username"
                className="form-label letraBlanca pt-4 usuario"
              >
                Usuario
              </label>

              <input
                onInput={(e) => setUsername(e.target.value)}
                type="text"
                className="form-control"
                id="username"
                placeholder="Nombre..."
              />
            </div>
            <div className="text-center mt-4">
              <label
                htmlFor="password"
                className="form-label text-center letraBlanca p-1 contraseña"
              >
                Contraseña
              </label>
            </div>
            <input
              onInput={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña..."
            />
            <div className="justify-content-center d-flex pt-4 mt-4">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="text-center pt-4 letraBlanca">
              ¿Todavía no tienes cuenta?<br />
              <Link to="/register" className="NoSubrayado">
                ¡Regístrate!
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
