import { Link } from "react-router-dom"

export const Nav = () => {
    return(
        <>
            <h1><Link to="/">Zoo</Link></h1><br></br>
            <Link to="/amphibians">amphibians</Link><br></br>
            <Link to="/birds">birds</Link><br></br>
            <Link to="/fish">fish</Link><br></br>
            <Link to="/mammals">mammals</Link><br></br>
            <Link to="/reptiles">reptiles</Link><br></br>
        </>
    )
}