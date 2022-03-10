
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Test from './pages/Test'
import React from 'react'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
