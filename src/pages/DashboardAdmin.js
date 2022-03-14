import React from 'react'
import NavbarHome from "../components/NavbarHome"
import Footer from "../components/Footer"
import Helmets from '../components/Helmets'
import { Card, Container, Row, Col, Image, Form } from 'react-bootstrap'

export const DashboardAdmin = () => {
    return (
        <>
            <Helmets children={"Dashboard Admin"} />
            <NavbarHome />
            <section className='my-5'>
                <Container>
                    <Row>
                        <Col sm={12} as={"h1"} className='text-pallet-2 text-center'>
                            See how your store progress so far
                        </Col>
                        <Col sm={12} md={8}>
                            <Card>

                            </Card>
                        </Col>
                        <Col sm={12} md={4}>

                        </Col>
                    </Row>
                </Container>
            </section>






            <Footer />

        </>
    )
}
