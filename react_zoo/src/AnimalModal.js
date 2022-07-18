import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export const AnimalModal = (props) => {
    let animal = props.animal
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="text-center">
              {animal.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Active Time: {animal.active_time}</p>
            <p>Diet: {animal.diet}</p>
            <p>Geo Range: {animal.geo_range}</p>
            <p>Habitat: {animal.habitat}</p>
            <p>Latin Name: {animal.latin_name}</p>
            <p>Lifepan: {animal.lifespan}</p>
            <p>Length: {animal.length_min} - {animal.length_max}</p>
            <p>Weight: {animal.weight_min} - {animal.weight_max}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}