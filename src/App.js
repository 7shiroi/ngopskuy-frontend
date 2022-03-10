
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Test from './pages/Test'
import Login from './pages/Login'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            results: { token }
          }
        }
      })
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
