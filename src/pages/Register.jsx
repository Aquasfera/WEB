import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const API_URL = "http://192.168.1.244:3000/api";
import "./aquagram/styles/Login.css"

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(true);
  const [avatar, setAvatar] = useState("h");
  const redirect = useNavigate();
  const register = (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password,
      active,
      avatar,
    };
    const options = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    };
    fetch(API_URL + "/register", options)
      .then((res) => res.json())
      .then((data) => {
        if(data.error)//Usuario existe
        {
          console.log('El usuario ya existe.')
        }
        else{
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
            <div className="justify-content-center d-flex pt-4 mt-4">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
          <div>
            <p className="text-center pt-4 letraBlanca">
              ¿ Ya tienes una cuenta ?<br />
              <Link to="/login" className="NoSubrayado">
                ¡ Ir al Login !
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
