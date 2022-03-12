import React from 'react'
import { Card, Container, Row, Col, Image, Form } from 'react-bootstrap'
import photo from '../assets/images/photo.png'
import NavbarHome from "../components/NavbarHome"
import Footer from "../components/Footer"
import Button from "../components/Button"
import CoffeeLogo from "../assets/images/CoffeeLogo.png"
import InputUnderline from "../components/InputUnderline"
import SizeCard from '../components/SizeCard'

const NewProduct = () => {
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
            <Row className='py-3'>
                <Col xl={6} className="px-5 d-flex flex-column justify-content-center">
                    <div className="d-flex flex-column align-items-center">
                        <Image src={CoffeeLogo} alt="product-image" className='img-fluid' roundedCircle style={{ width: '18rem' }}></Image>
                    </div>                    
                    <Button block variant='pallet-2 my-4 radius'> Take a Picture </Button>
                    <Button block variant='pallet-3 radius'> Choose from Gallery </Button>
                    <p className='mt-4'>Delivery Hour : </p>
                    <Form.Select aria-label="Default select example" className='mt-3 form-control radius'>
                        <option>Select Start Hour</option>
                        <option value="R">R</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example" className='mt-3 form-control radius w-100 mh-100 p-2'>
                        <option>Select End Hour</option>
                        <option value="1">Dine in</option>
                        <option value="2">Door Delivery</option>
                        <option value="3">Pick up</option>
                    </Form.Select>
                    <p className='mt-4'>Input stock : </p>
                    <Form.Select aria-label="Default select example" className='mt-3 form-control radius'>
                        <option>Select Start Hour</option>
                        <option value="R">R</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </Form.Select>
                </Col>
                <Col xl={6}>
                    <Container >
                        <Row className='px-3'>
                            <Col xl={12} >
                                <InputUnderline label="Name :" placeholder="Type product name min. 50 characters" block version="input-underline px-0 py-4 underline" ></InputUnderline>
                            </Col>
                            <Col xl={12} className="mt-3">
                                <InputUnderline label="Price :" placeholder="Type the price" block version="input-underline px-0 py-4 underline" ></InputUnderline>
                            </Col>
                            <Col xl={12} className="mt-3">
                                <InputUnderline label="Description :" placeholder="Describe your product min. 150 characters" block version="input-underline px-0 py-4 underline" ></InputUnderline>
                            </Col>
                            <Col xl={12}>
                                <h6 className='mt-4 text-new'>Input Product Size: </h6>
                                <p className='mt-3 text-new-1'>Click size you want to use for this product</p>
                            </Col>
                            <Col xl={12} className="d-flex flex-row justify-content-md-between">
					            <SizeCard radioName={"R"} value="R" />
					            <SizeCard radioName={"L"} value="L" />
					            <SizeCard radioName={"XL"} value="XL" />
                                <SizeCard radioName={"250 gr"} value="250 gr" />
                                <SizeCard radioName={"300 gr"} value="300 gr" />
                                <SizeCard radioName={"500 gr"} value="500 gr" />
                            </Col>
                            <Col xl={12}>
                                <h6 className='mt-4 text-new'>Input Delivery Method: </h6>
                                <p className='mt-3 text-new-1'>Click methods you want to use for this product</p>
                            </Col>
                            <Col xl={12} className="d-flex flex-row justify-content-md-between py-3 ml-20 mt-10 space-y-5">
                                <Button variant='pallet-2'  >
                                    Home Delivery
                                </Button>
                                <Button variant='pallet-3 mx-5' >
                                    Dine in
                                </Button>
                                <Button variant='pallet-1'>
                                    Take Away
                                </Button>
                            </Col>
                            <Col xl={12} className="ml-20 mt-10 space-y-5">
                                <Button block variant='pallet-2 my-3 radius save-1'> Save Product </Button>
                                <Button block variant='pallet-3 my-3 radius save-1'> Cancel </Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        </div>
    </>
  )
}

export default NewProduct