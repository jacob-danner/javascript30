import { useContext} from "react"
import { Context } from "./App"
import { Todo } from "./Todo"

export const TodoList = () => {
    const {todos, setTodos, done, setDone} = useContext(Context)

    function deleteAllChecked() {
        console.log(done)
        let remaining = todos.filter(el => !done.includes(el))
        setTodos(remaining)
        setDone([])
    }

    return(
        <>
            <h1>todolist</h1>
            <ul>
                {todos.map(el => {
                    return(<Todo message={el} key={el}/>)
                })}
            </ul>
            <button>Check All</button>
            <button onClick={deleteAllChecked}>Delete All Checked</button>
        </>
    )
}