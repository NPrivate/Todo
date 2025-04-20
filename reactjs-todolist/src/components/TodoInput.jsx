import React from 'react'
import { useState } from 'react'

const todoInput = (props) => {
  const {handleAddTodo} = props
  const [todoValue, setTodoValue] = useState('')

  return (
    <div>
          <input type="text" value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
          }} placeholder='Enter todo...' />
          <button onClick={() => {
            handleAddTodo(todoValue)
          }}>Add</button>
    </div>
  )
}

export default todoInput