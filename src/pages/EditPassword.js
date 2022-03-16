import React, { useEffect } from 'react'
import { Card, Container, Row, Col, Image, Form } from 'react-bootstrap'
import photo from '../assets/images/photo.png'
import NavbarHome from "../components/NavbarHome"
import Footer from "../components/Footer"
import Button from "../components/Button"
import Helmets from '../components/Helmets'
import { BiPencil } from "react-icons/bi"
import InputUnderline from "../components/InputUnderline"
import { editPassword, getProfile } from '../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ModalLoading from '../components/ModalLoading'
import ModalNotifSuccess from '../components/ModalNotifSuccess'
import ModalNotifError from '../components/ModalNotifError'

export const EditPassword = () => {
    const navigate = useNavigate()
    const auth = useSelector(state => state.auth.userData)
    const token = useSelector(state => state.auth)

    const dispatch = useDispatch()
    useEffect(() => {
        if (!auth.token) {
            const token = window.localStorage.getItem('token')
            if (token) {
                dispatch(getProfile(token))
                dispatch({ type: 'CLEAR_MESSAGE' });
            } else {
                window.alert('Please login first')
                navigate('/login')
            }
        }
    }, [])
    const onEditPassword = (e) => {
        e.preventDefault()
        const oldPassword = e.target.elements['password'].value
        const newPassword = e.target.elements['new_password'].value
        const confirmNewPassword = e.target.elements['repeat_password'].value
        const data = { oldPassword, newPassword, confirmNewPassword }
        dispatch(editPassword(token.token, data))
        window.scrollTo(0, 0)
    }
    const goCancel = () => {
        navigate('/profile')
    }
    return (
        <><Helmets children={"Edit Password"} />
            <ModalLoading isLoading={token.isLoading} />
            <ModalNotifSuccess message={token.message} />
            <ModalNotifError message={token.errorMsg} />
            <ModalNotifError message={token.errMsg} />
            <NavbarHome />
            <div className='bg-profile py-5 shadow'>
                <Container>
                    <Form onSubmit={onEditPassword}>
                        <Card>
                            <Row className='py-5'>
                                <Col xl={3} className="px-5 d-flex flex-column justify-content-center">
                                    <Image src={auth.image ? auth.image : photo} roundedCircle ></Image>
                                    <Card.Text as="h3" className='text-center mt-3'>
                                        {auth.first_name}
                                    </Card.Text>
                                    <Card.Text as="h5" className='text-center'>
                                        {auth.email}
                                    </Card.Text>
                                    <Card.Text as="h3" className='text-center mt-3'>
                                        Do you want to save the change?
                                    </Card.Text>
                                    <Button type="submit" block variant='pallet-2 radius'> Save Change </Button>
                                    <Button onClick={goCancel} block variant='pallet-3 radius'> Cancel </Button>
                                </Col>
                                <Col xl={9}>
                                    <Container>
                                        <Card className='position-relative shadow-lg border border-top-0 border-start-0 border-end-0 border-5 border-bottom border-pallet-2'>
                                            <Row className='mx-2 my-2'>
                                                <Card.Text as="h3" className=' my-3'>
                                                    Edit Password
                                                </Card.Text>
                                                <Col sm={12}>
                                                    <InputUnderline type="password" label="Last Password :" name="password" block version="input-underline px-0 py-4" ></InputUnderline>
                                                </Col>
                                                <Col sm={12}>
                                                    <InputUnderline type="password" label="New Password :" name="new_password" block version="input-underline px-0 py-4"  ></InputUnderline>
                                                </Col>
                                                <Col sm={12}>
                                                    <InputUnderline type="password" label="Repeat New Password :" name="repeat_password" block version="input-underline px-0 py-4" ></InputUnderline>
                                                </Col>
                                                <Col sm={12} className="px-5 py-5">
                                                </Col>
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
export default EditPassword