/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react'
import { Card, Container, Row, Col, Image, Form } from 'react-bootstrap'
import photo from '../assets/images/photo.png'
import NavbarHome from "../components/NavbarHome"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { BiPencil, BiCheckCircle } from "react-icons/bi"
import InputUnderline from "../components/InputUnderline"
import { editProfile, getProfile } from '../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Helmets from '../components/Helmets'
import { Navigate } from "react-router-dom"
import ModalLoading from '../components/ModalLoading'
import ModalNotifSuccess from '../components/ModalNotifSuccess'
import ModalNotifError from '../components/ModalNotifError'
// import LoadingBar from 'react-top-loading-bar'

export const Profile = () => {
    window.scrollTo(0, 0)
    const hiddenFileInput = useRef(null)
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth?.userData)
    const tokens = useSelector(state => state.auth)
    const [datas, setDatas] = useState({})
    const goEditPass = () => {
        navigate(`/profile/edit-password`)
    }
    const goVerify = () => {
        navigate(`/verifyemail`)
    }

    const fileInputHandler = (e) => {
        const reader = new FileReader();
        const image = e.target.files[0];

        const productImage = document.querySelector('#product-image');
        reader.readAsDataURL(image);

        reader.onload = (e) => {
            productImage.src = e.target.result;
            productImage.className += ' rounded-circle'
        };
        setDatas({
            image: e.target.files[0]
        });
    };

    const uploadFile = (e) => {
        e.preventDefault()
        hiddenFileInput.current.click()
    }
    const dispatch = useDispatch()
    useEffect(() => {
        if (!auth.token) {
            const token = window.localStorage.getItem('token')
            if (token) {
                dispatch(getProfile(token))
            } else {
                window.alert('Please login first')
                navigate('/login')
            }
        }
    }, [])
    const onEditProfile = (e) => {
        e.preventDefault()
        dispatch({ type: "CLEAR_MESSAGE" })
        const email = e.target.elements['email'].value
        const address = e.target.elements['address'].value
        const phone_number = e.target.elements['phone_number'].value
        const first_name = e.target.elements['first_name'].value
        const last_name = e.target.elements['last_name'].value
        const birth_date = e.target.elements['birth_date'].value
        const image = datas.image
        const display_name = e.target.elements['display_name'].value
        console.log(image)
        const data = { email, address, phone_number, first_name, last_name, birth_date, image, display_name }
        dispatch(editProfile(tokens.token, data))
        window.scrollTo(0, 0)
    }
    return (
        <><Helmets children={"My Profile"} />
            {auth?.token && <Navigate to='/' />}
            <ModalLoading isLoading={tokens.isLoading} />
            <ModalNotifSuccess message={tokens.message} />
            <ModalNotifError message={tokens.errorMsg} />
            <ModalNotifError message={tokens.errMsg} />
            <NavbarHome />
            <div className='bg-profile py-5 shadow'>
                <Container>
                    <Form onSubmit={(e) => onEditProfile(e)}>
                        <Card>
                            <Row className='py-5'>
                                <Col xl={3} className="px-5 d-flex flex-column justify-content-center">
                                    <Image id='product-image' src={auth.image || photo} roundedCircle ></Image>
                                    <Card.Text as="h3" className='text-center mt-3'>
                                        {auth.first_name}
                                    </Card.Text>
                                    <Card.Text as="h5" className='text-center'>
                                        {auth.email}
                                    </Card.Text>
                                    {
                                        auth?.is_verified === 1 &&
                                        <div className="d-flex justify-content-center alert alert-success fade show" role="alert">
                                            <strong>Verified Account  <BiCheckCircle size={25} />
                                            </strong>
                                        </div>
                                    }
                                    <Button block variant='pallet-2 radius' onClick={(e) => uploadFile(e)}> Choose Photo </Button>
                                    <input type="file"
                                        ref={hiddenFileInput}
                                        className='d-none'
                                        name='image'
                                        accept='image'
                                        onChange={(e) => fileInputHandler(e)}
                                    />
                                    <Button block variant='pallet-3 radius'> Remove Photo </Button>
                                    <Button onClick={goEditPass} block variant='pallet-1 radius'> Edit Password </Button>
                                    <Card.Text as="h3" className='text-center mt-3'>
                                        Do you want to save the change?
                                    </Card.Text>
                                    <Button type="submit" block variant='pallet-2 radius'> Save Change </Button>
                                    <Button block variant='pallet-3 radius'> Cancel </Button>
                                    <Button block variant='pallet-1 radius'> Logout </Button>
                                </Col>
                                <Col xl={9}>
                                    <Container>
                                        {
                                            auth?.is_verified === 0 &&
                                            <div className="d-flex justify-content-center alert alert-warning fade show" role="alert">
                                                <strong>Please Verify Your Account
                                                    <Button block variant='pallet-2 radius' onClick={goVerify}> Verify Acount </Button>
                                                </strong>
                                            </div>
                                        }
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
                                                    <InputUnderline name="display_name" label="Display Name :" block version="input-underline px-0 py-4" ></InputUnderline>
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