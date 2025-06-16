import { useState } from 'react'

import './App.css'

import Login from './componenets/Login.jsx'
import UserContextProvider from './context/UserContextProvider.jsx';
import Profile from './componenets/Profile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
     <Login/>
     <Profile/>
     </UserContextProvider>
  )
}

export default App
