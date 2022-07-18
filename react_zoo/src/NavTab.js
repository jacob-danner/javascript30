import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom"

export const NavTab = () => {
    
    return(
        <Navbar bg="light">
                
                <Navbar.Brand style={{"paddingLeft":"10px"}}as={Link} to="/">Zoo</Navbar.Brand>

                <Nav className="me-auto" nav>
                    <Nav.Link as={Link} to="/amphibians">amphibians</Nav.Link>
                    <Nav.Link as={Link} to="/birds">birds</Nav.Link>
                    <Nav.Link as={Link} to="/fish">fish</Nav.Link>
                    <Nav.Link as={Link} to="/mammals">mammals</Nav.Link>
                    <Nav.Link as={Link} to="/reptiles">reptiles</Nav.Link>
                </Nav>

        </Navbar>
    )
}