import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { FiDelete } from 'react-icons/fi'

const todoCard = (props) => {
  const {children} = props
  return (
    <div className='flex items-baseline justify-center'>
    <li className='todoItem border-1 mx-4 mb-4 p-2 w-50 md:w-xl border mx-4 mb-4 p-2 break-words rounded bg-white'>
      {children}      
    </li>
    <div className='icons flex flex-row'>
      <CiEdit
      className='w-6 h-6 ml-2 text-gray-400 transition-all duration-300 hover:text-purple-600'/>
      <FiDelete
      className='w-6 h-6 ml-2 text-gray-400 transition-all duration-300 hover:text-red-600'/>
      </div>

  </div>
  )
}

export default todoCard