import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import photo from '../assets/images/photo.png'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { BiPencil } from "react-icons/bi"
import InputUnderline from "../components/InputUnderline"

export const Profile = () => {
    return (
        <>
            <Navbar />
            <div className='bg-profile py-5 shadow'>
                <Container>
                    <Card>
                        <Row className='py-5'>
                            <Col xl={3} className="px-5 d-flex flex-column justify-content-center">
                                <Image src={photo} roundedCircle ></Image>
                                <Card.Text as="h3" className='text-center mt-3'>
                                    Zulaikha
                                </Card.Text>
                                <Card.Text as="h5" className='text-center'>
                                    Zulaikha17@gmail.com
                                </Card.Text>
                                <Button block variant='pallet-2 radius'> Choose Photo </Button>
                                <Button block variant='pallet-3 radius'> Remove Photo </Button>
                                <Button block variant='pallet-1 radius'> Edit Password </Button>
                                <Card.Text as="h3" className='text-center mt-3'>
                                    Do you want to save the change?
                                </Card.Text>
                                <Button block variant='pallet-2 radius'> Save Change </Button>
                                <Button block variant='pallet-3 radius'> Cancel </Button>
                                <Button block variant='pallet-1 radius'> Logout </Button>
                            </Col>
                            <Col xl={9}>
                                <Container>
                                    <Card className='position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom border-pallet-2'>
                                        <Row className='mx-2 my-2'>
                                            <Card.Text as="h3" className=' my-3'>
                                                Contacts
                                            </Card.Text>
                                            <Col xl={6} sm={12}>
                                                <InputUnderline label="Username :" block version="input-underline px-0 py-4" defaultValue="Zulaikha"></InputUnderline>
                                            </Col>
                                            <Col xl={6} sm={12}>
                                                <InputUnderline label="Mobile Number :" block version="input-underline px-0 py-4" defaultValue="(+62)813456782" ></InputUnderline>
                                            </Col>
                                            <Col xl={6} sm={12}>
                                                <InputUnderline label="Delivery Address :" block version="input-underline px-0 py-4" defaultValue="Iskandar Street no. 67 Block A Near Bus Stop"></InputUnderline>
                                            </Col>
                                            <Col xl={6} sm={12}>
                                            </Col>
                                            <Card.Text as="h3" className=' my-3'>
                                                Details
                                            </Card.Text>
                                            <Col xl={6} sm={12}>
                                                <InputUnderline label="Display Name :" block version="input-underline px-0 py-4" ></InputUnderline>
                                            </Col>
                                            <Col xl={6} md={12}>
                                                <InputUnderline type="date" label="DD / MM / YY :" block version="input-underline px-0 py-4" ></InputUnderline>
                                            </Col>
                                            <Col xl={6} sm={12}>
                                                <InputUnderline label="First Name :" block version="input-underline px-0 py-4" ></InputUnderline>
                                            </Col>
                                            <Col xl={6} sm={12}>
                                            </Col>
                                            <Col xl={6} sm={12}>
                                                <InputUnderline label="Last Name :" block version="input-underline px-0 py-4" ></InputUnderline>
                                            </Col>
                                            <div className='d-flex justify-content-around py-4'>
                                                <div class="form-check">
                                                    <input class="form-check-input text-pallet-1 " size={30} type="radio" name="gender" id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Male
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" checked />
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                        </Row>
                                        <div className='mx-2 my-2 px-2 py-2 btn-pallet-3 position-absolute end-0 border-0 rounded-circle' ><BiPencil size={30} /></div>
                                    </Card>
                                </Container>
                            </Col>

                        </Row>
                    </Card>
                </Container>
            </div>
            <Footer />
        </>
    )
}
export default Profile