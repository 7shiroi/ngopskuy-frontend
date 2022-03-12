import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Test from './pages/Test'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import React, { useEffect } from 'react'
import TestComponent2 from './pages/TestComponent2'
import { useDispatch, useSelector } from 'react-redux'
import { ForgotPassword } from './pages/ForgotPassword'
import EditPassword from './pages/EditPassword'

export const App = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      dispatch({
        type: "AUTH_LOGIN_FULFILLED",
        payload: {
          data: {
            result: token
          }
        }
      })
    }

  }, [dispatch, auth.token])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/test2' element={<TestComponent2 />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/profile/edit-password' element={<EditPassword />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
