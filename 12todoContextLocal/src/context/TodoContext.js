import react ,{createContext, useContext} from 'react';

 export const TodoContext = createContext({
    todos:[
        {
            id :1,
            text:'Learn React',
            completed:true
        },

    ],
    addTodo  : (todo)=>{},
    updateTodo : (id,updatedTodo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}
 });

 export const useTodo =()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider; 