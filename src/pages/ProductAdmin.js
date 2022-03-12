import React from 'react'
import CoffeeLogo from "../assets/images/CoffeeLogo.png"
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import Button from '../components/Button'
import InputUnderline from '../components/InputUnderline'
import coffee from '../assets/images/coffee.png'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'

const ProductAdmin = () => {
  return (
    <>
    <NavbarHome/>
     <div className='bg-product bg-gray-100 h-full'>
        <Container>
            <Row className='px-3 justify-content-md-between'>
                <Col xl={5} sm={12} className="px-5 d-flex flex-column justify-content-center">
                    <div style={{fontSize:"20px", fontFamily:"Rubik"}} className="p-10 mt-5 ml-20 mx-5 py-5 nav-text">
                        <span>Favorite & Promo {""}</span><span className="text-yellow-800"> {">"} Cold Brew</span>
                    </div>
                    <Image src={CoffeeLogo} alt="product-image" roundedCircle className='img-fluid'></Image>
                    <div style={{fontSize:"48px", fontFamily:"Poppins"}} className="mt-5 ml-20">
                        <p className="text-center text-4xl font-bold">Cold Brew</p>
                        <p className="text-center text-xl font-medium">IDR 30.000</p>
                    </div>
                    <div className="ml-20 mt-10 space-y-5">
                    <Button block variant='pallet-2 radius'> Add to Cart </Button>
                    <Button block variant='pallet-3 my-2 radius'> Edit Product </Button>
                    <Button block variant='pallet-1 radius'> Delete Menu </Button>
                    </div>
                </Col>
                <Col xl={7} sm={12} className="px-5 d-flex flex-column justify-content-center">
                    <Container>
                        <Card style={{fontSize:"30px", fontFamily:"Poppins"}} className='text-center position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom mx-5 px-5 radius'>
                            <Card.Text >
                                Delivery only on Monday to friday at  1 - 7 pm 
                            </Card.Text>
                            <br/>
                            <Card.Text>
                                Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                            </Card.Text>
                            <br/>
                            <Card.Text >
                                Choose a size
                            </Card.Text>
                        </Card>
                        <div className="mt-10 space-y-8">
                            <p className="text-center font-bold text-lg mt-4">Choose Delivery Methods</p>
                            <div className="d-flex flex-row justify-content-md-center py-3 ml-20 mt-10 space-y-5">
                                <Button variant='pallet-2'  >
                                   Dine in
                                </Button>
                                <Button variant='pallet-3 mx-5' >
                                    Door Delivery
                                </Button>
                                <Button variant='pallet-1'>
                                    Pickup
                                </Button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-md-center align-items-left">
                            <p className='mt-3'>Set Time: </p>
                            <InputUnderline block version="input-underline px-5 underline" placeholder='Enter the Time you arrived'></InputUnderline>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
        <Container className='mt-5 mb-5 d-flex justify-content-end'>
            <Card className=' shadow px-5 mx-5 radius'>
                <Row xs={1} md={2} >
                    <Col xl={3} className='text-justify mt-3 mb-3 px-5' >
                        <Image src={coffee} alt="product-image" roundedCircle ></Image>
                    </Col>
                    <Col xl={5}>
                        <Card.Body className='mx-4'>
                            <Card.Title className='mt-2'>COLD BREW</Card.Title>
                            <Card.Text className='mt-3'>
                                x1 (Large) <br/> x1 (Regular)
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col xl={4} className='d-flex justify-content-start'>
                        <Button  variant='pallet-3  radius mt-5'>
                            -
                        </Button>
                        <div className="flex-grow text-black font-medium text-md rounded-lg mx-5 mt-5 py-2 w-32 align-items-center radius">
                            2
                        </div>
                        <Button  variant='pallet-3  radius mt-5' >
                            +
                        </Button>
                    </Col>
                </Row>
            </Card>
            <Card className=' shadow px-5 mx-5 text-center radius'>
               <p className='text-center'> Checkout</p>
            </Card>
        </Container>
     </div>
    <Footer />
    </>
  )
}

export default ProductAdmin