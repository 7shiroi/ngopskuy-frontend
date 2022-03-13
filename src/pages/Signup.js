/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import NavbarLog from '../components/NavbarLog'
import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { userSignUp } from '../redux/actions/user'
import Helmets from '../components/Helmets'

export const Signup = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user)

	const onSignUp = (event) => {
		window.scrollTo(0, 0)
		event.preventDefault()
		const first_name = event.target.elements['first_name'].value
		const last_name = event.target.elements['last_name'].value
		const email = event.target.elements['email'].value
		const password = event.target.elements['password'].value
		const confirm_password = event.target.elements['confirm_password'].value
		dispatch(userSignUp(first_name, last_name, email, password, confirm_password))
	}
	return (
		<><Helmets children={"Sign Up"} />
			<div className='container-fluid'>
				<div className='row position-relative '>
					<div className='col-6 background-login d-none d-md-block '></div>
					<div className='col-12 col-md-6 bg-pallet-4 border-top border-bottom border-pallet-1'>
						<NavbarLog />
						{
							user.errorMsg &&
							<div className="alert alert-warning fade show" role="alert">
								<strong>{user.errorMsg[0]}</strong>
							</div>
						}
						{
							user.errMsg &&
							<div className="alert alert-warning fade show" role="alert">
								<strong>{user.errMsg}</strong>
							</div>
						}
						{
							user.successMsg &&
							<div className="alert alert-success fade show" role="alert">
								<strong>{user.successMsg}</strong>
							</div>
						}
						<Form onSubmit={onSignUp} className='py-5'>
							<Input name="first_name" label="First Name :" block placeholder="First Name"></Input>
							<Input name="last_name" label="Last Name :" block placeholder="Last Name"></Input>
							<Input name="email" label="Email :" block placeholder="Email"></Input>
							<Input type="password" name="password" label="Confirm Password :" block placeholder="Password"></Input>
							<Input type="password" name="confirm_password" label="Password :" block placeholder="Confirm Password"></Input>
							<Link className='text-decoration-none text-pallet-1 px-5' to="/forgptpassword"> Forgot Password?</Link>
							<Button type="submit" block variant='pallet-1 radius my-5 py-3' > Sign Up </Button>
							<Button block variant='pallet-1 radius mb-5 py-3'><FcGoogle size={30} />  Sign Up With Google</Button>
						</Form>
					</div>
					<div className='d-grid'>
						<Card className='shadow position-absolute top-100 start-50 translate-middle radius d-none d-md-block'>
							<Row xs={1} md={2} className="g-4 ">
								<Col>
									<Card.Body>
										<Card.Title>Get your member card now!</Card.Title>
										<Card.Text>
											Let's join with our member and enjoy the deals.
										</Card.Text>
									</Card.Body>
								</Col>
								<Col >
									<Card.Body>
										<Card.Title></Card.Title>
										<Card.Text>
											<Button variant='pallet-3 radius '>  Create Now</Button>
										</Card.Text>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Signup