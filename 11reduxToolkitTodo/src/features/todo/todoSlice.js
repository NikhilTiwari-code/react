
import { createSlice,nanoid } from "@reduxjs/toolkit";

 const initialState =
 {
    todos:[{
        id:1,
        text:"hello world"
    }]
} 

export const todoSlice = createSlice({
    name :'todos',
    initialState,
    reducers  :{ 
        
    addTodo :(state,action)=>{ 
        // here state is the current state of the todoSlice and 
        //  action is the  payload that we pass to the action
        // addtodo tells how to send data to the store
         const todo ={ 
             id :nanoid(),
             text : action.payload.text
         }
         console.log(action.payload.id);
         
         state.todos.push(todo)
     },
     removeTodo  :(state,action)=>{
        //tell how to  remove the todo
        state.todos= state .todos.filter ((todo)=>todo.id !== action.payload)
     },
     updateTodo  :(state,action)=>{
        state.todos = state.todos.map ((todo)=>todo.id === action.payload.id ? {...todo, text: action.payload.text}:todo)
     },
    } 
    

})


// steps to export reducers

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

// store also need all lists of reducers

export default todoSlice.reducer


