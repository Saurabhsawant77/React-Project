import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvide'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  
//<UserContextProvider.Provider value={}>  ithe pn values pass hotat
  return (
    <UserContextProvider> 
    <h1>Hello</h1>
    <Login/>
    <Profile />
    </UserContextProvider>
  )
}

export default App
