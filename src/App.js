
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Test from './pages/Test'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import ProductAdmin from './pages/ProductAdmin'
import ProductCust from './pages/ProductCust'
import EditProductAdmin from './pages/EditProductAdmin'
import NewProduct from './pages/NewProduct'
import NewPromo from './pages/NewPromo'
import ProductAllAdmin from './pages/ProductAllAdmin'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ForgotPassword from './pages/ForgotPassword'

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
        <Route path='test' element={<Test />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='profile' element={<Profile />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='product-admin/:id' element={<ProductAdmin />} />
        <Route path='product-customer/:id' element={<ProductCust />} />
        <Route path='edit-product-admin/:id' element={<EditProductAdmin />} />
        <Route path='new-product' element={<NewProduct />} />
        <Route path='new-promo' element={<NewPromo />} />
        <Route path='product' element={<ProductAllAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
