import { useState } from 'react'
import './App.css'
import Card from  './component/card'
import aSmilingWoman from './assets/a smiling woman.png'
import Template from './component/template'


function App() {
  const [count, setCount] = useState(0)

  const city = "patna"
  let obj ={
    name : "Nikhil",
    age : "26"
  }

  let arr = [1,2,3,4,5,6]

  return (
    <>
    <h1 className='text-3xl font-bold underline bg-blue-500'>LEARNING PROPS IN REACT</h1>
    
     {/* <Template
     name = "Nikhil"
     age = "26"
     city ={city}
     obj ={obj}
     arr = {arr}
     />  */}

     

    <Card
      title="Sample Card Title"
      description="This is a sample description for the card. You can edit it using props."
      imageUrl={aSmilingWoman}
      buttonText="jai ho"
    /> 
    <Card
      title="this is sample card title"
      description="props are used to pass data from a parent component to a child componen"
      imageUrl={aSmilingWoman}
      buttonText="jai ho phir se"
    />  
    
    </>
  )
}

export default App












