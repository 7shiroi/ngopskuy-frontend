import React, { useEffect, useRef, useState } from 'react'
import coffee from "../assets/images/coffee-logo-1.png"
import { Container, Row, Col, Image } from 'react-bootstrap'
import Button from '../components/Button'
import Form from 'react-bootstrap/Form'
import {FaRegTrashAlt} from 'react-icons/fa'
import { useParams, useNavigate, Navigate, useSearchParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getProduct, editProduct } from '../redux/actions/product'
import InputUnderline from '../components/InputUnderline'
import ButtonPlusMinus from '../components/ButtonPlusMinus'
import EmptyInputImage from "../assets/images/empty-input-image.png"
import Helmets from '../components/Helmets'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import Modals from '../components/ModalsEditProduct'

const EditProductAdmin = () => {
  const hiddenFileInput = useRef(null)
  const {product} = useSelector(state => state)
  const [data, setData] = useState({})
  const [modalShow, setModalShow] = React.useState(false);

  const {id} = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getProduct(id))
  },[])

  useEffect(()=>{
    console.log(product)
  },[product])

  const fileInputHandler = (e) => {
    const reader = new FileReader();
    const image = e.target.files[0];

    const productImage = document.querySelector('#product-image');
    reader.readAsDataURL(image);

    reader.onload = (e) => {
      productImage.src = e.target.result;
      productImage.className += ' rounded-circle'
    };


    setData({
      image: e.target.files[0]
    });
  };
  
  const uploadFile = (e) => {
    e.preventDefault()
    hiddenFileInput.current.click()
  }
  
  const editedProduct = (e) => {
      e.preventDefault()
      const token = window.localStorage.getItem("token")
      const inputData = {}
      inputData.name = e.target.elements['name'].value
      inputData.price = e.target.elements['price'].value
      inputData.description = e.target.elements['description'].value
      inputData.image = data.image
      dispatch(editProduct(token, id, inputData))
      window.scrollTo(0, 0)
  }

  return (
    <>
     <Helmets children={"Edit Product Admin"} />
     <NavbarHome />
     <div className='bg-product bg-gray-100 h-full'>
        <div style={{fontSize:"20px", fontFamily:"Rubik"}} className="text-justify p-auto px-5 mx-5 py-5 nav-text">
            <span >Favorite & Promo {""}</span><span className="text-yellow-800"> {">"} {product.product?.name}</span>
        </div>
        <Container>
          <form onSubmit={(e) => editedProduct(e)}>
            <Row className='px-3 justify-content-md-between'>
                <Col xl={6} sm={12} className="px-5 d-flex flex-column justify-content-md-center">
                    <div className='position-relative m-auto'>
                        <Image id='product-image' src={product.product?.image} alt="product-image" className='img-fluid' style={{ width: '20em' }}></Image>
                        <div className='position-absolute top-0 end-0 px-3 py-2' ><FaRegTrashAlt  /></div>
                    </div>
                    <Button block variant='pallet-3 my-1 radius save-1' onClick={(e) =>uploadFile(e)}> Choose from Gallery </Button>
                    <input type="file"
                      ref={hiddenFileInput}
                      className='d-none'
                      name='image'
                      accept='image'
                      onChange={(e) => fileInputHandler(e)}
                    />
                    <div style={{fontSize:"24px", fontFamily:"Poppins"}} className="px-2 m-auto w-75 mt-3 text-center">
                        <p className="text-justify font-bold">Delivery only on Monday to friday at  1 - 7 pm</p>
                    </div>
                </Col>
                <Col xl={6} sm={12} className=" px-5 desc">
                    <Row>
                    <Col xl={12} sm={12}>
                      <InputUnderline block version="input-underline underline-1 px-0" name='name' placeholder='input product name' defaultValue={product.product?.name} style={{fontSize:"24px", fontFamily:"Poppins", fontWeight:"900", backgroundColor:"#FAF8F6"}}></InputUnderline>
                    </Col>
                    <Col xl={12} sm={12}>
                      <InputUnderline block version="input-underline underline-1 px-0 py-2 " name='price' placeholder='input product price' defaultValue={product.product?.price} style={{fontSize:"24px", fontFamily:"Poppins", fontWeight:"500", backgroundColor:"#FAF8F6"}}/>
                    </Col>
                    <Col xl={12} sm={12}>
                      <InputUnderline block version="input-underline underline-1 px-0 py-2 text-wrap mt-3 " name='description' placeholder='input product desc' defaultValue={product.product?.description}  style={{fontSize:"16px", fontFamily:"Poppins", fontWeight:"400", backgroundColor:"#FAF8F6"}}/>
                    </Col>
                    </Row>
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
                        <div className='text-center'>
                            <Button onClick={()=>setModalShow(true)} type="submit" block variant='pallet-1 radius my-5 py-3'>Save change</Button>
                          <Modals show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </Container>
                </Col>
            </Row>
            </form>
        </Container>        
     </div>
     <Footer />
    </>
  )
}

export default EditProductAdmin