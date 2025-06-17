// store.js 
// 1. import the configureStore function from @reduxjs/toolkit
// 2. Create a root reducer that combines all the reducers
// 3. Create the store using the configureStore function
// 4. export the store


import {configureStore} from '@reduxjs/toolkit'
import { todoSlice } from '../features/todo/todoSlice'
 
 const store = configureStore({
    reducer: { todos:todoSlice.reducer}
})


 export default store
   

