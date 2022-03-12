import React from 'react'
import coffee from "../assets/images/coffee-logo-1.png"
import { Container, Row, Col, Image } from 'react-bootstrap'
import Button from '../components/Button'
import Form from 'react-bootstrap/Form'
import {FaRegTrashAlt} from 'react-icons/fa'
import { ButtonGroup } from 'react-bootstrap'

const EditProductAdmin = () => {
  return (
    <>
    <header>
        Header
    </header>
     <div className='bg-product bg-gray-100 h-full'>
        <div style={{fontSize:"20px", fontFamily:"Rubik"}} className="text-justify p-auto px-5 mx-5 py-5 nav-text">
            <span >Favorite & Promo {""}</span><span className="text-yellow-800"> {">"} Cold Brew</span>
        </div>
        <Container>
            <Row className='px-3 justify-content-md-between'>
                <Col xl={6} sm={12} className="px-5 d-flex flex-column justify-content-md-center">
                    <div className='position-relative m-auto'>
                        <Image src={coffee} alt="product-image" className='img-fluid'></Image>
                        <div className='position-absolute top-0 end-0 px-3 py-2' ><FaRegTrashAlt  /></div>
                    </div>
                    <div style={{fontSize:"24px", fontFamily:"Poppins"}} className="px-2 m-auto w-75 mt-3 text-center">
                        <p className="text-justify font-bold">Delivery only on Monday to friday at  1 - 7 pm</p>
                    </div>
                </Col>
                <Col xl={6} sm={12} className="px-5 desc">
                    <h4 style={{fontSize:"65px", fontFamily:"Poppins", fontWeight:"900"}}>COLD BREW</h4>
                    <hr/>
                    <h5 style={{fontSize:"40px", fontFamily:"Poppins", fontWeight:"500"}}>IDR 30.000</h5>
                    <hr/>
                    <h6 style={{fontSize:"25px", fontFamily:"Poppins", fontWeight:"400"}} className="text-align-justify">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</h6>
                    <hr/>
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
                            <Col xl={6} sm={12} className='d-flex justify-content-center'>
                                <ButtonGroup className='mt-5' aria-label="Basic example">
                                    <Button  variant='pallet-3'>-</Button>
                                    <Button variant='pallet-3'>2</Button>
                                    <Button  variant='pallet-3' >+</Button>
                                </ButtonGroup>
                            </Col>
                            <Col xl={6} sm={12} className='text-center'>
                                <Button variant='pallet-3 radius mt-5 text-center'>Add to Cart</Button>
                            </Col>
                        </Row>
                    </Container>
                    <div className='text-center'>
                        <Button type="submit" block variant='pallet-1 radius my-5 py-3'>Save change</Button>
                    </div>
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

export default EditProductAdmin