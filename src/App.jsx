import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './commiter/Login'
import Register from './commiter/Register'
import Home from './pages/Home'

import Layout from "./Layout"

const App = () => {
  return (
    <div>
       
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
           
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
