import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Test from './pages/Test'
import Login from './pages/Login'
import Footer from './components/Footer';
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import ProductAdmin from './pages/ProductAdmin'
import ProductCust from './pages/ProductCust'
import EditProductAdmin from './pages/EditProductAdmin'
import NewProduct from './pages/NewProduct'
import NewPromo from './pages/NewPromo'
import ProductAllAdmin from './pages/ProductAllAdmin'
import React, { useEffect } from 'react'
import ForgotPassword from './pages/ForgotPassword'
import TestComponent2 from './pages/TestComponent2'
import { useDispatch, useSelector } from 'react-redux'
import EditPassword from './pages/EditPassword'
import VerifyEmail from './pages/VerifyEmail'
// import { ProductAdmin } from './pages/ProductAdmin'
import EditPromo from './pages/EditPromo'
import NavbarHome from './components/NavbarHome';
import Search from './pages/Search';

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
        <Route path='/footer' element={<Footer />} />
        <Route path='/navbar' element={<NavbarHome />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/test2' element={<TestComponent2 />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/verifyemail' element={<VerifyEmail />} />
        <Route path='/profile/edit-password' element={<EditPassword />} />
        <Route path='/search' element={<Search />} />
        <Route path='/editPromo' element={<EditPromo />} />
        <Route path='product-admin/:id' element={<ProductAdmin />} />
        <Route path='product-customer/:id' element={<ProductCust />} />
        <Route path='edit-product-admin/:id' element={<EditProductAdmin />} />
        <Route path='new-product' element={<NewProduct />} />
        <Route path='new-promo' element={<NewPromo />} />
        <Route path='product-admin' element={<ProductAllAdmin />} />

      </Routes>
    </BrowserRouter>
  )
}


export default App
