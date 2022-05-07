import React from 'react'
import { useDispatch } from 'react-redux';
import {addtoTodo, selectItems} from "../slice/todo"
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Todo from './Todo';



const Input = () => {
    const [message, setMessage] = React.useState('')
    const [formInput, setFormInput] = React.useState(false)
    const [error, setError] = React.useState(false)
    const[input, setInput] = React.useState('')
    const items = useSelector(selectItems)
    const dispatch = useDispatch();

    useEffect(() => {
        if(input === ''){
            setFormInput(true)
            setError(false)
        }else{
            setFormInput(false)
            setError(true)
    
          }
         
        
    }, [input])


    useEffect(() => {
      let message;
      if(items.length === 0){
        message = "Todo is Empty please add todo"
        setMessage(message)
      }
      else{
        message=""
        setMessage(message)
      }
      
  }, [items])


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    var d = new Date();
    var mins= d.getMinutes();
    var h = d.getHours()
    var s = d.getSeconds()
    d = h + ':' + mins + ':'+ s;


   
        
    const addToTodo = (e) => {
      e.preventDefault()
       dispatch(addtoTodo({
           item: input,
           done: false,
           id: d,
           min: today
       }));
       //console.log(input)
       setInput('')
      
    }

  return (
        <section className='md:mx-auto px-1  w-[100%] relative h-[100vh]'>
            <form className='mx-auto mt-[50px] w-[97%] md:w-[70%]' action="" onSubmit={addToTodo}>
                  {!error && <div className='bg-red-600 max-w-fit mb-2 rounded-full px-2 text-white'>Please type your todos....</div> }
                 <div className='flex border border-red-700 rounded-xl overflow-hidden'>
                    <input className='flex-grow py-2 px-4 md:text-2xl outline-none' value={input.charAt(0).toUpperCase() + input.substring(1).toLowerCase()} type="text" placeholder='Type Here' onChange={(e) => setInput(e.target.value)}/>
                    <button disabled={formInput} type='submit' className={`bg-red-800 py-2 px-4 md:py-3 md:px-8 text-white cursor-pointer`}>Add</button>
                </div>
               
            </form>
            {message&&<div className='bg-red-300 px-1 text-center rounded-xl opacity-30 text-2xl w-[97%] md:w-[70%] p-4 absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>{message}</div>}
            
            <div className='mt-[40px] md:mt-[100px]'><Todo /></div>
            <div className='m-4 text-black absolute right-0 top-0 md:left-0 md:top-0  max-w-fit '>Number of todos:  <span className='bg-red-600 p-2 rounded-full text-white'>{items.length}</span></div>
    </section>
  )
}

export default Input;