import React from "react";
import { Link } from "react-router-dom";

export const Zoo = () => {
    return (
        <>
            <h1>Zoo</h1>
            <Link to="/mammals">Mammals</Link>
        </>
    )
}