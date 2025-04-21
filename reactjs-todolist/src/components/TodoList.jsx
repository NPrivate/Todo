import React from 'react'
import TodoCard from './todoCard'
import { PiRowsPlusBottomFill } from 'react-icons/pi'

const todoList = (props) => {
  const {todo} = props

  return (
    <div>
      <ul className='main'>
      {todo.map((todo,todoIndex) => {
        return (
         <TodoCard {...props} key="todoIndex" index={todoIndex}>
          <p>{todo}</p>
         </TodoCard>
        )
      })}
      </ul>
    </div>
  )
}

export default todoList