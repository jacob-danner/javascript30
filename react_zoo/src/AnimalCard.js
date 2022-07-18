import { NavTab } from "./NavTab"
import { AnimalModal } from "./AnimalModal";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";


export const AnimalCard = (animal) => {
    animal = animal.animal

    const [modalToggle, setModalToggle] = useState(false)

    return (
        <>
            <Card style={{ width: '25rem' }}>
                <Card.Img src={animal.image_link} style={{width:"100%", height:"40vh", objectFit:"cover"}}></Card.Img>
                <Button variant="dark" onClick={() => setModalToggle(true)}>{animal.name}</Button>
            </Card>

            <AnimalModal show={modalToggle} onHide={() => setModalToggle(false)} animal={animal}/>
        </>
    )
}