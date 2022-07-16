import { Nav } from "./Nav"

export const AnimalCard = (animal) => {
    animal = animal.animal
    return (
        <>
            <p>{animal.name}</p>
            <img src={animal.image_link}></img>
        </>
    )
}