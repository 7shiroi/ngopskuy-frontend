import React, { useEffect } from 'react'
import { Card, Container, Row, Col, Image, Form } from 'react-bootstrap'
import photo from '../assets/images/photo.png'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { BiPencil } from "react-icons/bi"
import InputUnderline from "../components/InputUnderline"
import { editProfile, getProfile } from '../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth.userData)
    const token = useSelector(state => state.auth)

    const dispatch = useDispatch()
    useEffect(() => {
        if (!auth.token) {
            const token = window.localStorage.getItem('token')
            if (token) {
                // dispatch({
                //     type: "AUTH_LOGIN_FULFILLED",
                //     payload: {
                //         data: {
                //             result: token
                //         }
                //     }
                // })
                console.log(auth?.gender === 'male')
                dispatch(getProfile(token))
            } else {
                window.alert('Please login first')
                navigate('/login')
            }
        }
    }, [])
    const onEditProfile = (e) => {
        e.preventDefault()
        const email = e.target.elements['email'].value
        const address = e.target.elements['address'].value
        const phone_number = e.target.elements['phone_number'].value
        const first_name = e.target.elements['first_name'].value
        const last_name = e.target.elements['last_name'].value
        const birth_date = e.target.elements['birth_date'].value

        const data = { email, address, phone_number, first_name, last_name, birth_date }
        dispatch(editProfile(token.token, data))
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Navbar />
            <div className='bg-profile py-5 shadow'>
                <Container>
                    <Form onSubmit={(e) => onEditProfile(e)}>
                        <Card>
                            {
                                token.errorMsg &&
                                <div className="alert alert-warning fade show" role="alert">
                                    <strong>{token.errorMsg[0]}</strong>
                                </div>
                            }
                            {
                                token.errMsg &&
                                <div className="alert alert-warning fade show" role="alert">
                                    <strong>{token.errMsg}</strong>
                                </div>
                            }
                            {
                                token.successMsg &&
                                <div className="alert alert-success fade show" role="alert">
                                    <strong>{token.successMsg}</strong>
                                </div>
                            }
                            <Row className='py-5'>
                                <Col xl={3} className="px-5 d-flex flex-column justify-content-center">
                                    <Image src={auth.image ? auth.image : photo} roundedCircle ></Image>
                                    <Card.Text as="h3" className='text-center mt-3'>
                                        {auth.first_name}
                                    </Card.Text>
                                    <Card.Text as="h5" className='text-center'>
                                        {auth.email}
                                    </Card.Text>
                                    <Button block variant='pallet-2 radius'> Choose Photo </Button>
                                    <Button block variant='pallet-3 radius'> Remove Photo </Button>
                                    <Button block variant='pallet-1 radius'> Edit Password </Button>
                                    <Card.Text as="h3" className='text-center mt-3'>
                                        Do you want to save the change?
                                    </Card.Text>
                                    <Button type="submit" block variant='pallet-2 radius'> Save Change </Button>
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
                                                    <InputUnderline label="Email Address :" name="email" block version="input-underline px-0 py-4" defaultValue={auth.email}></InputUnderline>
                                                </Col>
                                                <Col xl={6} sm={12}>
                                                    <InputUnderline label="Mobile Number :" name="phone_number" block version="input-underline px-0 py-4" defaultValue={auth.phone_number} ></InputUnderline>
                                                </Col>
                                                <Col xl={6} sm={12}>
                                                    <InputUnderline label="Delivery Address :" name="address" block version="input-underline px-0 py-4" defaultValue={auth.address}></InputUnderline>
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
                                                    <InputUnderline type="text" name="birth_date" defaultValue={auth.birth_date} label="DD / MM / YY :" block version="input-underline px-0 py-4" ></InputUnderline>
                                                </Col>
                                                <Col xl={6} sm={12}>
                                                    <InputUnderline label="First Name :" name="first_name" defaultValue={auth.first_name} block version="input-underline px-0 py-4" ></InputUnderline>
                                                </Col>
                                                <Col xl={6} sm={12}>
                                                </Col>
                                                <Col xl={6} sm={12}>
                                                    <InputUnderline label="Last Name :" name="last_name" defaultValue={auth.last_name} block version="input-underline px-0 py-4" ></InputUnderline>
                                                </Col>
                                                <div className='d-flex justify-content-around py-4'>
                                                    <div class="form-check">
                                                        <input class="form-check-input text-pallet-1 " defaultChecked={true} size={30} type="radio" name="gender" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            Male
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="gender" defaultChecked={auth?.gender === 'female'} id="flexRadioDefault2" />
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
                    </Form>
                </Container>
            </div>
            <Footer />
        </>
    )
}
export default Profile