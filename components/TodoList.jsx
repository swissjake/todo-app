import React from 'react'
import { useSelector } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {deleteTodo, selectItems, setCheck } from '../slice/todo'
import {AiFillCheckCircle} from 'react-icons/ai'

const TodoList = ({name, done, id, min}) => {
        const items = useSelector(selectItems)
        const dispatch = useDispatch()

            //handle Delete 
        const handleDelete = () => {
            dispatch(deleteTodo({id}))
            window.alert('Are you sure want to delete this task');
        }

        //Handle check
        const handleCheck = () => {
            dispatch(setCheck(id))
        }

  return (
    <div className='mx-auto h-fit w-[97%] md:w-[70%]'>
        <div className='h-fit flex items-center justify-between bg-red-200 my-1 md:my-2 p-2 md:p-4 text-xl md:text-2xl rounded-2xl shadow-lg'>
           
            <p className={done && `line-through decoration-red-800 text-purple-700`}>{name}</p>
        <div className='flex items-center'>
            <div onClick={handleCheck} className="mr-2"><AiFillCheckCircle className={!done ? `fill-red-700 h-8 w-8 cursor-pointer text-2xl` : `fill-green-700 h-8 w-8 cursor-pointer text-2xl`}/></div>
                <div onClick={handleDelete} className='rounded-full cursor-pointer bg-black p-2'>
                <AiFillDelete className='h-7 w-7 fill-red-800'/>
                </div>
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