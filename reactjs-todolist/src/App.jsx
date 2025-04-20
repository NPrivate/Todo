import { useState } from "react"
import TodoInput from "./components/todoInput.jsx"
import TodoList from "./components/TodoList.jsx"

function App() {

  const [todo, setTodo] = useState([ 
    ])

  function handleAddTodo(newTodo){
    const newTodoList = [...todo, newTodo]
    setTodo(newTodoList)
  }

  return (
    <>
     <main className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <TodoInput setTodo handleAddTodo={handleAddTodo}/>
      <TodoList todo={todo}/>
     </main>
    
    </>
  )
}

export default App
