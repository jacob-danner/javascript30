import React from "react";
import { AnimalCard } from "../AnimalCard";
import { NavTab } from "../NavTab";

import {Container, Row} from "react-bootstrap"

export const Reptiles = (group) => {
    group = group.group
    
    return(
        <>
            <NavTab />
            <Container>
                <h1 className="text-center">Reptiles</h1>

                <Row>
                    {group.map(el => {
                        return <AnimalCard animal={el} />
                    })}
                </Row>
            </Container>
            
        </>
    )
}