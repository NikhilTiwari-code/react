import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider }from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'



function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=>[ {id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev)=>prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo ))) 
  }
  
  const deleteTodo = (id)  =>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !== id))
  }

  const toggleTodo = (id) =>{
    
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id ===id ? {...prevTodo, completed: !prevTodo.completed}:prevTodo)))
    console.log("toggled", id);
  }

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(storedTodos&& storedTodos.length){
      setTodos(storedTodos)
    }
    
    //console.log(todos);
    
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])



  return (
   
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      
      <h1 className='text-3xl font-bold text-violet-700'>TODO APP WITH CONTEXT and LOCAL STORAGE</h1>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                     
                    <div className="mb-4">
                        <TodoForm />
                    </div> 
                    <div className="flex flex-wrap gap-y-3">
                      { todos.map((todo) => (
                        <div key={todo.id} className='w-full md:w-1/2'> 
                          <TodoItem todo={todo} />
                        </div>))}
                    </div> 
                </div>
            </div>
    </TodoProvider> 
  )

}



export default App
