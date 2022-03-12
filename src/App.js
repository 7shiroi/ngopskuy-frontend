
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Test from './pages/Test'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ForgotPassword } from './pages/ForgotPassword'

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
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
