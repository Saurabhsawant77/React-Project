import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// route

// Outlet Decide ab yeh decide krega konsa kaha use hoga

function Layout() {
  return (
    <>
    <Header />
    <Outlet /> 
    <Footer />
    </>
  )
}

export default Layout