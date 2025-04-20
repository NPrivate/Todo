import React from 'react'
import TodoCard from './todoCard'

const todoList = (props) => {
  const {todo} = props

  return (
    <div>
      <ul className='main'>
      {todo.map((todo,todoIndex) => {
        return (
         <TodoCard key="todoIndex">
          <p>{todo}</p>
         </TodoCard>
        )
      })}
      </ul>
    </div>
  )
}

export default todoList