import React, { useEffect, useState } from 'react'
import CoffeeLogo from "../assets/images/CoffeeLogo.png"
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import Button from '../components/Button'
import InputUnderline from '../components/InputUnderline'
import coffee from '../assets/images/coffee.png'
import NavbarHome from '../components/NavbarHome'
import Footer from '../components/Footer'
import { getProduct, deleteProduct } from '../redux/actions/product'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import SizeCard from '../components/SizeCard'
import { increment, decrement } from '../redux/actions/buttons'
import hazelnut from '../assets/images/hazelnut.png'
import Modals from '../components/ModalsDelete'
import Helmets from '../components/Helmets'

const ProductAdmin = ({ getProduct, deleteProduct }) => {
    const auth = useSelector(state => state.auth)
    const { product } = useSelector(state => state)
    const [control, setControl] = useState(false)
    const [show, setShow] = useState(-1)
    const buttons = useSelector(state => state.buttons)
    const [modalShow, setModalShow] = React.useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    console.log({ id })


    useEffect(() => {
        console.log(buttons);
    }, [buttons])

    const onIncrement = (e) => {
        e.preventDefault()
        dispatch(increment())
    }

    const onDecrement = (e) => {
        e.preventDefault()
        dispatch(decrement())
    }

    useEffect(() => {
        getProduct(id)
    }, [])

    useEffect(() => {
        if (control) {
            dispatch(getProduct(id))
        }
    }, [control])

    // useEffect(()=>{
    //     if(()=>modalShow(false)){
    //         navigate ('/product-admin')
    //     }
    // })

    useEffect(() => {
        console.log(product)
    }, [product])

    const goBack = () => {
        window.history.back()
    }

    const goEdit = () => {
        navigate(`/edit-product-admin/${id}`)
    }

    const goPay = () => {
        navigate('/payment')
    }

    const handleDelete = () => {
        const token = window.localStorage.getItem("token")
        dispatch(deleteProduct(token, id))
    }
    return (
        <>
            <Helmets children={"Product Admin"} />
            {auth?.userData.id_role === 3 && <Navigate to='/' />}
            {auth.token == null && <Navigate to='/' />}
            <NavbarHome />
            <div className='bg-product bg-gray-100 h-full'>
                <Container>
                    <div onClick={goBack} style={{ fontSize: "20px", fontFamily: "Rubik" }} className="p-10 ml-20 mx-5 py-5 nav-text">
                        <span>Favorite & Promo {""}</span><span className="text-yellow-800"> {">"} {product.product?.name}</span>
                    </div>
                    <Row className='px-3 justify-content-md-between'>
                        <Col xl={5} sm={12} className="px-5 d-flex flex-column justify-content-center">
                            <Image src={product.product?.image || hazelnut} alt="product-image" roundedCircle className='img-fluid'></Image>
                            <div style={{ fontSize: "48px", fontFamily: "Poppins" }} className="mt-5 ml-20">
                                <p className="text-center text-4xl font-bold">{product.product?.name}</p>
                                <p className="text-center text-xl font-medium"><NumberFormat value={product.product?.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'IDR '} ></NumberFormat></p>
                            </div>
                            <div className="ml-20 mt-10 space-y-5">
                                <Button block variant='pallet-2 radius'> Add to Cart </Button>
                                <Button onClick={goEdit} block variant='pallet-3 my-2 radius'> Edit Product </Button>
                                <Button onClick={() => setModalShow(true)} block variant='pallet-1 radius'> Delete Menu </Button>
                                <Modals show={modalShow} onClick={handleDelete} onHide={() => setModalShow(false)} />
                                {product.product?.success === true && <Navigate to='/product-admin' />}
                            </div>
                        </Col>
                        <Col xl={7} sm={12} className="px-5 d-flex flex-column justify-content-center">
                            <Container>
                                <Card style={{ fontSize: "24px", fontFamily: "Poppins" }} className='text-center position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom mx-5 px-5 radius'>
                                    <Card.Text className='mt-5'>
                                        Delivery only on Monday to friday at {product.product?.delivery_hour_start} - {product.product?.delivery_hour_end} pm
                                    </Card.Text>
                                    <br />
                                    <Card.Text>
                                        Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                                    </Card.Text>
                                    <br />
                                    <Card.Text >
                                        Choose a size
                                    </Card.Text>
                                    <div className="d-flex flex-row justify-content-md-center mb-5">
                                        <SizeCard radioName={"R"} value="R" />
                                        <SizeCard radioName={"L"} value="L" />
                                        <SizeCard radioName={"XL"} value="XL" />
                                    </div>
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
                                    <InputUnderline block version="input-underline underline" placeholder='Enter the Time you arrived'></InputUnderline>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='mt-5 d-flex justify-content-center column'>
                    <Card xl={6} className=' shadow px-5 mx-5 radius'>
                        <Row xs={1} md={2} className="text-left">
                            <Col xl={3} md={12} className='text-justify mt-3 mb-3 px-3' >
                                <Image src={product.product?.image} alt="product-image" roundedCircle style={{ width: '6em' }}></Image>
                            </Col>
                            <Col xl={5} md={12}>
                                <Card.Body className='mx-4 md-auto'>
                                    <Card.Title className='mt-2'>{product.product?.name}</Card.Title>
                                    <Card.Text className='mt-3'>
                                        x1 (Large) <br /> x1 (Regular)
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col xl={4} md={12} className='d-flex flex-row justify-content-center py-4'>
                                <Button onClick={onDecrement} variant='pallet-3  radius mt-5'>
                                    -
                                </Button>
                                <div className="flex-grow text-black font-medium text-md rounded-lg mx-5 mt-5 py-2 w-32 align-items-center radius">
                                    {buttons.value}
                                </div>
                                <Button onClick={onIncrement} variant='pallet-3  radius mt-5' >
                                    +
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                    <Card xl={6} className='shadow radius mx-5 px-5 pt-5 text-align-center checkout' >
                        <Button onClick={goPay} variant='pallet-2 text-center w-100 h-100 text-button'>Checkout</Button>
                    </Card>
                </Container>
            </div>
            <Footer />
        </>
    )
}

const mapStateToProps = state => ({ product: state.product })

const mapDispatchToProps = { getProduct, deleteProduct }

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdmin)