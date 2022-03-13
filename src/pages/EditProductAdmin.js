import React, { useEffect, useState } from 'react'
import coffee from "../assets/images/coffee-logo-1.png"
import { Container, Row, Col, Image } from 'react-bootstrap'
import Button from '../components/Button'
import Form from 'react-bootstrap/Form'
import {FaRegTrashAlt} from 'react-icons/fa'
import { useParams, useNavigate, Navigate, useSearchParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getProduct, updateProduct } from '../redux/actions/product'
import InputUnderline from '../components/InputUnderline'
import ButtonPlusMinus from '../components/ButtonPlusMinus'

const EditProductAdmin = ({getProduct}) => {
//   const [name, setName] = useState('');
//   const [price, setPricet] = useState('');
//   const [description, setDescription] = useState('');
  const {product} = useSelector(state => state)
  const {id} = useParams()
  console.log({id})

  const dispatch = useDispatch()
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{
    getProduct(id)
  },[])

  useEffect(()=>{
    const token = window.localStorage.getItem("token")
    updateProduct(token, id)
  },[])

  useEffect(()=>{
    console.log(product)
  },[product])
  
  const editedProduct = (e) => {
      e.prevenDefault()
      const token = window.localStorage.getItem("token")
      dispatch(updateProduct(token, id))
  }
  return (
    <>
    <header>
        Header
    </header>
     <div className='bg-product bg-gray-100 h-full'>
        <div style={{fontSize:"20px", fontFamily:"Rubik"}} className="text-justify p-auto px-5 mx-5 py-5 nav-text">
            <span >Favorite & Promo {""}</span><span className="text-yellow-800"> {">"} {product.product?.name}</span>
        </div>
        
        <Container>
            <Row className='px-3 justify-content-md-between'>
                <Col xl={6} sm={12} className="px-5 d-flex flex-column justify-content-md-center">
                    <div className='position-relative m-auto'>
                        <Image src={product.product?.image} alt="product-image" className='img-fluid'></Image>
                        <div className='position-absolute top-0 end-0 px-3 py-2' ><FaRegTrashAlt  /></div>
                    </div>
                    <div style={{fontSize:"24px", fontFamily:"Poppins"}} className="px-2 m-auto w-75 mt-3 text-center">
                        <p className="text-justify font-bold">Delivery only on Monday to friday at  1 - 7 pm</p>
                    </div>
                </Col>
                <Col xl={6} sm={12} className="px-5 desc">
                {product.length > 1 && <Navigate to='/product'/>}
                <Form onChange={editedProduct}>
                    <InputUnderline block version="input-underline underline-1" name='name' placeholder='input product name'></InputUnderline>
                    <InputUnderline block version="input-underline underline-2" name='price' placeholder='input product price' ></InputUnderline>
                    <InputUnderline block version="input-underline underline-3 text-wrap mt-3" name='description' placeholder='input product desc' ></InputUnderline>
                    <Form.Select aria-label="Default select example" className='mt-5 form-control radius'>
                        <option>Select Size</option>
                        <option value="R">R</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example" className='mt-5 form-control radius w-100 mh-100 p-2'>
                        <option>Select Delivery Method</option>
                        <option value="1">Dine in</option>
                        <option value="2">Door Delivery</option>
                        <option value="3">Pick up</option>
                    </Form.Select>
                    <Container>
                        <Row className=''>
                            <Col xl={6} sm={12} className='d-flex justify-content-center mt-5'>
                                <ButtonPlusMinus></ButtonPlusMinus>
                            </Col>
                            <Col xl={6} sm={12} className='text-center mt-3'>
                                <Button variant='pallet-3 radius mt-5 text-center '>Add to Cart</Button>
                            </Col>
                        </Row>
                    </Container>
                    <div className='text-center'>
                        <Button type="submit" block variant='pallet-1 radius my-5 py-3'>Save change</Button>
                    </div>
                </Form>
                </Col>
            </Row>
        </Container>        
     </div>
     <footer>
         Footer
     </footer>
    </>
  )
}

const mapStateToProps = state => ({product: state.product})

const mapDispatchToProps = {getProduct}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductAdmin)