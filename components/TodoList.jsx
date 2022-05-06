import React from 'react'
import { useSelector } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {deleteTodo, selectItems } from '../slice/todo'

const TodoList = ({name, done, id, min}) => {
        const items = useSelector(selectItems)
        const dispatch = useDispatch()
        const handleDelete = () => {
            dispatch(deleteTodo({id}))
        }

  return (
    <div className='mx-auto h-fit md:w-[50%] px-4'>
        <div className='h-fit flex items-center justify-between bg-red-200 my-2 p-4 text-2xl rounded-2xl shadow-lg'>
            <p className='break-all'>{name}</p>
            <div onClick={handleDelete} className='rounded-full bg-black p-2'>
            <AiFillDelete className='h-7 w-7 fill-red-800'/>
            </div>
        </div>
        <div className='flex items-center justify-end mb-3'>
            <p className='text-sm text-gray-400 mr-2'>{min}</p>
                <span className='h-5 border border-red-700'></span>
            <p className='text-sm text-gray-400 ml-2'>{id}</p>
        </div>
    </div>
  )
}

export default TodoList