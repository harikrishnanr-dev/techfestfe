import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
function App() {

  return (
    <>

        <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/dashboard' element={ <Dashboard/>} />
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
