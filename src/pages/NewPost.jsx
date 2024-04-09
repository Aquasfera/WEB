import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';


function NewPost()
{
    return(
    <>
    <div className="justify-content-center m-auto rounded-lg p-4 d-flex flex-column align-items-center">
    <form method="post" enctype="multipart/form-data" className="d-flex flex-column justify-content-center bg-primary rounded align-items-center w-75 rounded-lg gap-4 p-3">
        
        <input type="file" id="image" name="image" accept="image/*" capture="environment"/>
        
        <div class="mb-3">
            <label for="formGroupExampleInput" className="form-label text-white">Comentario</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Comentario"/>
            </div>
            <div class="mb-3">

            <DropdownButton id="locationDropdown" title="Localización" className="mb-3" variant="success">
                <Dropdown.Item href="#/vegeta">Planeta Vegeta</Dropdown.Item>
                <Dropdown.Item href="#/dorada">Costa Dorada</Dropdown.Item>
                <Dropdown.Item href="#/estrellas">Mar de Estrellas</Dropdown.Item>
            </DropdownButton>

            <DropdownButton id="fishDropdown" title="Pescado" className="mb-3" variant="success">
                <Dropdown.Item href="#/#/lubina">Lubina</Dropdown.Item>
                <Dropdown.Item href="#/#/medusa">Medusa</Dropdown.Item>
                <Dropdown.Item href="#/#/pepino">Pepino de Mar</Dropdown.Item>
            </DropdownButton>
        </div>

      <Button variant="success">Postear</Button>{' '}
    </form>
    </div>

    </>
    )
}

export default NewPost;