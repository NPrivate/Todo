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

  function handleDeleteTodo(index){
    const newTodoList = todo.filter( (todo, todoIndex)=>{
      return todoIndex !== index
    })
    setTodo(newTodoList)
  }

  function handeEditTodo(index){

  }

  return (
    <>
     <main className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <TodoInput setTodo handleAddTodo={handleAddTodo}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todo={todo}/>
     </main>
    
    </>
  )
}

export default App
