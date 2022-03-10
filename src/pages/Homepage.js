import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Button from '../components/Button'
import {FaSearch, FaUser} from 'react-icons/fa'

export const Homepage = () => {
    return (
        <>
            <header className='home-head'>
                <div className='overlay'>
                    <Container>
                        <Row>
                            <Col className='d-flex align-items-center' sm={12} md={6}>
                                <div>
                                    <h1>Start Your Day with Coffee and Good Meals</h1>
                                    <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
                                    <Button padding={'py-3'}>Get Started</Button>
                                </div>
                            </Col>
                            <Col className='d-flex justify-content-end' sm={12} md={6}>
                                <div>
                                    <Form className='position-relative'>
                                        <Form.Control name='search' placeholder='Search' className='bg-white rounded-pill px-3' />
                                        <FaSearch className='position-absolute top-50 end-0 translate-middle-y me-3' color='#000' />
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
            <main>
                <Container>
                    <section className='info-bar rounded rounded-3 bg-white shadow p-3'>
                        <Row className='w-100 g-0 gy-3'>
                            {[...Array(3)].map(()=>(
                                <Col sm={12} md={4}>
                                    <Row>
                                        <Col className='d-flex justify-content-end'>
                                            <div className="icon-wrapper text-white bg-black rounded-circle">
                                                <FaUser />
                                            </div>
                                        </Col>
                                        <Col>
                                            <strong>90+</strong>
                                            <div>Staff</div>
                                        </Col>
                                    </Row>
                                </Col>
                            ))}
                        </Row>
                    </section>
                </Container>
            </main>
        </>
    )
}

export default Homepage