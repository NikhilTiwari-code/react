
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'


function MyApp (){
  return (
    <div>
      <h1>hello from my app</h1>
    </div>
  )
}

// const reactElement ={
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
     
//   },
//   children: 'click me to go to google'
// }

const AnotherElement =(
  [<a href="https://google.com" target="_blank">click me to go to google</a>]
 //[<h1>hello from my app</h1>] 
)
const name = "Nikhil"


const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to go to google',
 name
 
)

createRoot(document.getElementById('root')).render(
  <>
     {reactElement}
    <App/>

  </>
  
)

