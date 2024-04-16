/* eslint-disable no-unused-vars */
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { useEffect, useState, useCallback } from "react";
import "./NewPost.css";

import Card from "react-bootstrap/Card";
import { useDropzone } from "react-dropzone";

function NewPost() {
  const API_URL = "http://192.168.1.244:3000/api/";

  const [possibleAnimals, setPossibleAnimals] = useState([""]);
  const [possibleLocations, setPossibleLocations] = useState([""]);

  const [locationIdSelected, setLocationIdSelected] = useState("Localización");
  const [animalIdSelected, setAnimalIdSelected] = useState("Animal");

  const [description, setDescription] = useState("");

  const onDrop = useCallback((acceptedFiles) => {}, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  useEffect(() => {
    fetch(API_URL + "/location")
      .then((res) => res.json())
      .then((res) => setPossibleLocations(res))
      .catch((error) => console.error(error));

    fetch(API_URL + "/animal")
      .then((res) => res.json())
      .then((res) => setPossibleAnimals(res))
      .catch((error) => console.error(error));
  }, []);

  function createPost(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("likes", 0);
    formData.append("animal_id", animalIdSelected);
    formData.append("location_id", locationIdSelected);
    formData.append("url", acceptedFiles[0]);
    formData.append("user_id", 1);

    const options = {
      method: "post",
      credentials: "include",

      body: formData,
    };

    fetch(API_URL + "/post", options)
      .then((res) => res.json())
      .then((res) => console.log("Post creado", res))
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
          className="d-flex flex-column justify-content-center rounded align-items-center w-75 rounded-lg gap-4 p-3"
        >
          
          
          <div className="img-container DragDrop" {...getRootProps()}>
            <input {...getInputProps()} />
            
            {acceptedFiles[0] ? (
              <Card.Img
                style={{ height: "200px", width: "169" }}
                src={URL.createObjectURL(acceptedFiles[0])}
              />
            ) : (
              <p className="LetraBlanca">Arrastra tu foto aquí<br></br> o<br></br> click para examinar</p>
            )}
            {/* <input type="file" id="image" onChange={(e)=>{setImage(e.target.files[0])}} accept="image/*" capture="environment"/> */}
          </div>
          <div className="">
            <label className="form-label text-white">Descripción</label>
            <textarea
              type="textarea"
              cols="40" rows="5"
              className="form-control descripcion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="mb-3 center row">
            <div className="col-6">
              <DropdownButton
                id="locationDropdown"
                title="Ubicación"
                className="mb-3"
                variant="light"
                onSelect={(a) => setLocationIdSelected(a)}
              >
                {possibleLocations.length > 0
                  ? possibleLocations.map((locs) => (
                      <Dropdown.Item key={locs.id} eventKey={locs.id}>
                        {locs.name}
                      </Dropdown.Item>
                    ))
                  : "Not Valid"}
              </DropdownButton>
            </div>
            <div className="col-6">
              <DropdownButton
                id="fishDropdown"
                title={
                  possibleAnimals.find((an) => an.id === animalIdSelected)
                    ?.name || "Animal"
                }

                className="mb-3"
                variant="light"
                onSelect={(a) => {
                  setAnimalIdSelected(a);
                }}
              >
                {possibleAnimals.length > 0
                  ? possibleAnimals.map((ani) => (
                      <Dropdown.Item key={ani.id} eventKey={ani.id}>
                        {ani.name}
                      </Dropdown.Item>
                    ))
                  : "Not Valid"}
              </DropdownButton>
            </div>
          </div>
          <Button variant="light" type="submit">
            Postear
          </Button>
        </form>
      </div>
    </div>
  );

}

export default NewPost;
