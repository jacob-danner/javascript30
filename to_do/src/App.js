import { useState, createContext } from "react";

import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const Context = createContext()

function App() {
  const [todos, setTodos] = useState([])
  const [done, setDone] = useState([]) 
  
  let value = {
    todos,
    setTodos,
    done,
    setDone
  }

  return (
    <Context.Provider value={value}>
      <AddTodo />
      <TodoList/>
    </Context.Provider>
  );
}

export default App;
