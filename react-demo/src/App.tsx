import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Admin } from './pages/Admin'
import Layout from './pages/Layouts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index path="/" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
