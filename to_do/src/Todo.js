import { useContext, useState } from "react"
import { Context } from "./App"

export const Todo = ({message}) => {
    const {todos, setTodos, done, setDone} = useContext(Context)

    // toggle style
    const [toggle, setToggle] = useState(false)
    
    let style = toggle ? "line-through" : "none"
    
    async function handleToggle() {
        let switchToggle = async () => { setToggle(!toggle) }
        await switchToggle()
        if (toggle) {
            setDone([...done, message])
        } else {
            if ( done.includes(message) ) {
                let filtered = done.filter(el => el !== message)
                setDone(filtered)
            }
        }
    }

    function handleDelete() {
        let remaining = todos.filter(el => el !== message)
        setTodos(remaining)
    }
    return (
        <li>
            <span style={{textDecoration: style}}>{message}</span>
            <input type="checkbox" onChange={handleToggle}></input>
            <button onClick={handleDelete}>delete</button>
        </li>
    )
}