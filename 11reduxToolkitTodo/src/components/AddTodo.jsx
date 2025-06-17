import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo,removeTodo,updateTodo} from '../features/todo/todoSlice' 

function AddTodo() {

  // functionality to add todo
  // dispactch will be used to call the addtodo function
  // addtodo function will be called
  // we will pass the text from the input
  // text will be passed to the addtodo function
  // addtodo will add the todo to the store by dispatching the addtodo action
  // dispatch will call the addtodo function
  // usedispatch is a react hook that returns the dispatch function 

  const  dispatch = useDispatch()
  // dispatch reducer ko use karte hue value store me add karta hai
  const [input, setInput] = useState('')

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo({text:input}))
    setInput('')
  }
 
  
   

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
      
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo