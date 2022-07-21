import { useState } from "react"

export const Todo = ({message, setDoneList}) => {
    const [toggle, setToggle] = useState(false)
    let style = toggle ? "line-through" : "none"

    return (
        <li>
            <span style={{textDecoration: style}}>{message}</span>
            <input type="checkbox" onChange={() => setToggle(!toggle)}></input>
            {console.log(toggle)}
        </li>
    )
}