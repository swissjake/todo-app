import React from 'react'
import { useDispatch } from 'react-redux';
import {addtoTodo, selectItems} from "../slice/todo"
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



const Input = () => {
    const [formInput, setFormInput] = React.useState(false)
    const[input, setInput] = React.useState('')
    const items = useSelector(selectItems)
    const dispatch = useDispatch();

    // useEffect((input) => {
    //     if(input === ''){
    //         setFormInput(false)
    //     }else{
    //         setFormInput(true)
    //     }
        
    // }, [input])
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
   
        
    const addToTodo = () => {
       dispatch(addtoTodo({
           item: input,
           done: false,
           id: d,
           min: today
       }));
       //console.log(input)
    }

  return (
        <section className='md:mx-auto px-4  md:w-[50%] mt-[100px]'>
            <form action="" >
                 <div className='flex w-full border border-red-700 rounded-xl overflow-hidden'>
                    <input className='flex-grow py-2 px-4 md:text-2xl outline-none' value={(input)} type="text" placeholder='Type Here' onChange={(e) => setInput(e.target.value)}/>
                    <div  onClick={addToTodo} className={`bg-red-800 py-2 px-4 md:py-3 md:px-8 text-white cursor-pointer`}>Add</div>
                </div>
                <div>{items.length}</div>
            </form>
    </section>
  )
}

export default Input;