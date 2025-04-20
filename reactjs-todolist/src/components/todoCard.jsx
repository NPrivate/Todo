import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { FiDelete } from 'react-icons/fi'

const todoCard = (props) => {
  const {children} = props
  return (
    <div>
    <li className='todoItem'>
      {children}
      <div className='icons'>
      <CiEdit/>
      <FiDelete/>
      </div>
      
    </li>

  </div>
  )
}

export default todoCard