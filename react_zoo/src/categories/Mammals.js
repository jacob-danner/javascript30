import React from "react";
import { AnimalCard } from "../AnimalCard";
import { NavTab } from "../NavTab";

import { Container, Row } from "react-bootstrap";

export const Mammals = (group) => {
    group = group.group
    
    return(
        <>
            <NavTab />
            <Container bg="light">

                <h1 className="text-center">Mammals</h1>
                
                <Row>

                    {group.map(el => {
                        return <AnimalCard animal={el} />
                    })}
                </Row>
            </Container>
            
        </>
    )
}