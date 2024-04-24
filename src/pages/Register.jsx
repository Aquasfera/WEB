import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
import "./aquagram/styles/Login.css"

import Carousel from 'react-bootstrap/Carousel';

import PFPPaths from '../assets/profilePics/profilePicsPaths.json'

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(true);
  const [avatar, setAvatar] = useState(0);
  const redirect = useNavigate();

  const register = (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password,
      active,
      avatar: avatar.toString(),
    };

    const options = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    };

    fetch(API_URL + "register", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) //Usuario existe
        {
          console.log('El usuario ya existe.')
        }
        else {
          redirect("/login");
        }

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="box">
      <form
        onSubmit={register}
        className="col-lg-12 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <div className="card-body">
            <h2 className="text-center p-3 letraBlanca login">REGISTER</h2>
            <div className="text-center">
              <label className="form-label letraBlanca pt-4 usuario">
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
                className="form-label text-center letraBlanca p-1 contraseña"
              >
                Contraseña
              </label>
              <input
                onInput={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="password"
                placeholder="Contraseña..."
              />
            </div>

            <div className="text-center mt-4 d-flex flex-column justify-content-center align-items-center">
              <label className="form-label text-center letraBlanca p-1">
                Imagen de Perfil
              </label>
              <Carousel activeIndex={avatar} onSelect={(e) => { setAvatar(e) }} interval={null} style={{ width: "100px", display: "flex", justifyContent: "center" }}>
                {PFPPaths.map((img, index) => (
                  <Carousel.Item><img key={index} src={"src/assets/profilePics/" + img} style={{ width: "50px" }} /></Carousel.Item>))}
              </Carousel>
            </div>
            <div className="justify-content-center d-flex pt-4 mt-2">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
          <div>
            <p className="text-center pt-4 letraBlanca">
              ¿Ya tienes una cuenta?<br />
              <Link to="/login" className="NoSubrayado">
                ¡Ir al Login!
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
