//import Dashboard from "./scenes/dashboard";
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './scenes/login'
import Dashboard from './scenes/dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
