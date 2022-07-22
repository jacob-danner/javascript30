import { useContext, useState } from "react"
import { Context } from "./App"

export const AddTodo = () => {
    const {todos, setTodos} = useContext(Context)
    const [input, setInput] = useState("")

    function handleChange(event) {
        setInput(event.target.value)
    }
    
    return(
        <>
            <input type={'text'} placeholder={'add todo'} onChange={event => handleChange(event)}></input>        
            <button onClick={event => setTodos([...todos, input])}>add</button>
        </>
    )
}