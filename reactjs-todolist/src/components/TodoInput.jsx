import React from 'react'
import { useState } from 'react'

const todoInput = (props) => {
  const {handleAddTodo} = props
  const [todoValue, setTodoValue] = useState('')

  return (
    <div className='flex justify-center gap-4 my-10'>
          <input
          className='border-1 border-gray-400 bg-white rounded-md p-2 transition-all duration-300 shadow-sm hover:text-black hover:border-black hover:shadow-md hover:shadow-purple-300' 
          type="text" value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
          }} placeholder='Enter todo...' />
          <button
          className="border-1 border-gray-400 p-2 rounded-md text-gray-600 shadow-sm transition-all duration-300 hover:text-black hover:border-black  hover:bg-white hover:shadow-md hover:shadow-purple-300"
          onClick={() => {
            handleAddTodo(todoValue)
            setTodoValue('')
          }}>Add</button>
    </div>
  )
}

export default todoInput