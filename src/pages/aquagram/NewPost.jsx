/* eslint-disable no-unused-vars */
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { useEffect, useState, useCallback, useContext } from "react";
import Context from '../../contexts/Context';

import "./styles/NewPost.css";

import Card from "react-bootstrap/Card";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { DropdownMenu } from "react-bootstrap";

function NewPost() {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_PHOTOS = import.meta.env.VITE_API_URL_PHOTO ;

  const [possibleAnimals, setPossibleAnimals] = useState([""]);
  const [possibleLocations, setPossibleLocations] = useState([""]);

  const [locationIdSelected, setLocationIdSelected] = useState("Localización");
  const [animalIdSelected, setAnimalIdSelected] = useState("Animal");

  const [description, setDescription] = useState("");

  const {actualUser, token} = useContext(Context);
  const onDrop = useCallback((acceptedFiles) => {}, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });



  const navigate = useNavigate()
  
  useEffect(() => {
    fetch(API_URL + "location")
      .then((res) => res.json())
      .then((res) => setPossibleLocations(res))
      .catch((error) => console.error(error));

    fetch(API_URL + "animal")
      .then((res) => res.json())
      .then((res) => setPossibleAnimals(res))
      .catch((error) => console.error(error));
  }, []);

  function createPost(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("animal_id", animalIdSelected);
    formData.append("location_id", locationIdSelected);
    formData.append("url", acceptedFiles[0]);
    formData.append("user_id", actualUser.id);
    formData.append('token', token);

    const options = {
      method: "post",
      credentials: "include",

      body: formData,
    };

    fetch(API_URL + "post", options)
      .then((res) => res.json())
      .then((res) => {console.log("Post creado", res); navigate('/aquagram')})
      .catch((err) => console.log(err));
  }

  return (
    <div className="colorFondo container-fluid">
        
      <div className="justify-content-center m-auto rounded-lg p-4 d-flex flex-column align-items-center ">
      <h2 className="LetraBlanca tamanoh2">NEW POST</h2>

        <form
          method="post"
          onSubmit={createPost}
          encType="multipart/form-data"
          className="d-flex flex-column rounded w-75 rounded-lg gap-4 p-3"
        >
          
          
          <div className="img-container DragDrop" {...getRootProps()}>
            <input {...getInputProps()} />
            
            {acceptedFiles[0] ? (
              <Card.Img
                style={{ height: "200px", width: "169" }}
                src={URL.createObjectURL(acceptedFiles[0])}
              />
            ) : (isDragActive ? 
              <p className="LetraBlanca">Suelta Aquí</p> :
              <p className="LetraBlanca">Arrastra tu foto aquí<br></br> o<br></br> click para examinar</p>
            )}
            {/* <input type="file" id="image" onChange={(e)=>{setImage(e.target.files[0])}} accept="image/*" capture="environment"/> */}
          </div>
          <div>
            <div>
              <DropdownButton
                id="locationDropdown"
                title={
                  possibleLocations.find((an) => an.id == locationIdSelected)
                    ?.name || "Ubicación"
                }
                className="mb-3"
                variant="light"
                style={{maxHeight: '400px'}}
                onSelect={(a) => setLocationIdSelected(a)}
              >
                <Dropdown.Menu style={{maxHeight: '150px' , overflowY: 'scroll'}}>
                {possibleLocations.length > 0
                  ? possibleLocations.map((locs, index) => (
                      <Dropdown.Item key={index} eventKey={locs.id}>
                        {locs.name}
                      </Dropdown.Item>
                    ))
                  : "Not Valid"}
                  </Dropdown.Menu>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton
                id="fishDropdown"
                title={
                  possibleAnimals.find((an) => an.id == animalIdSelected)
                    ?.name || "Animal"
                }
                variant="light"
                style={{maxHeight: '400px'}}
                onSelect={(a) => {
                  setAnimalIdSelected(a);
                }}
              >
                <Dropdown.Menu style={{maxHeight: '150px' , overflowY: 'scroll'}}>
                {possibleAnimals.length > 0
                  ? possibleAnimals.map((ani, index) => (
                      <Dropdown.Item key={index} eventKey={ani.id}>
                        {ani.name}
                      </Dropdown.Item>
                    ))
                  : "Not Valid"}
                  </Dropdown.Menu>
              </DropdownButton>
            </div>
          </div>
          <div>
            <label className="form-label text-white">Descripción</label>
            <textarea
              type="textarea"
              cols="40" rows="5"
              className="form-control descripcion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Escribe aqui la descripción del post..."
            />
          </div>
          
          <Button variant="light" type="submit" className="primary-color">
            Postear
          </Button>
        </form>
      </div>
    </div>
  );

}

export default NewPost;
