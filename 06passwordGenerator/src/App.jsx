import { useState } from 'react'
import Password from './Passowrd.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Password />
    </div>
  )
}

export default  App
