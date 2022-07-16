import React from "react";
import { AnimalCard } from "../AnimalCard";
import { Nav } from "../Nav";
import '../category.css'

export const Amphibians = (group) => {
    group = group.group
    
    return(
        <>
            <Nav />
            <h1>Amphibians</h1>
            {group.map(el => {
                return <AnimalCard animal={el} />
            })}
            
        </>
    )
}