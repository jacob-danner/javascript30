import React from "react";
import { AnimalCard } from "../AnimalCard";
import { NavTab } from "../NavTab";

import { Container, Row } from "react-bootstrap";

export const Amphibians = (group) => {
    group = group.group
    
    return(
        <>
            <NavTab />
            <Container>
                <h1 className="text-center">Amphibians</h1>

                <Row>
                    {group.map(el => {
                        return <AnimalCard animal={el} />
                    })}
                </Row>

            </Container>
            
        </>
    )
}