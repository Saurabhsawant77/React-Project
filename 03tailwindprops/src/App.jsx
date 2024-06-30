import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj  = {
    Name : "Saurabh sawant",
    age: 21
  }

  let newArr = [1,2,3,4];

  return (
  <>
  <h1 className='mb-4 bg-orange-200 p-4 rounded-xl text-black hover:bg-blue-500 hover:text-orange-400'>Tailwind test</h1>
  {/* <Card channel = "React-JS" someObje = {myObj} arr = {newArr}/> */}
  <Card userName = "Saurabh Sawant" btnText = "Visit Me" />
  <Card userName = "Siddhi Sawant" btnText = "Click Me" />
  <Card userName = "Arpi Sawant"/>
  <Card userName = "Abhi Sawant"/>
  </>
  )
}

export default App
