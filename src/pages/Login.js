
import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Navbar from '../components/NavbarHome'
import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Link, Navigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/auth'
import Helmets from '../components/Helmets'
import NavbarSign from '../components/NavbarSign'

export const Login = () => {
	const auth = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const onLogin = (event) => {
		event.preventDefault()
		const email = event.target.elements['email'].value
		const password = event.target.elements['password'].value
		dispatch(login(email, password))
	}
	return (
		<> {auth.token && <Navigate to="/" />}
			<Helmets children={"Login"} />
			<div className='container-fluid'>
				<div className='row position-relative'>
					<div className='col-6 background-login'></div>
					<div className='col-6 border-top border-bottom border-pallet-1 bg-pallet-4'>
						<NavbarSign />
						{
							auth.errorMsg &&
							<div className="alert alert-warning fade show" role="alert">
								<strong>{auth.errorMsg}</strong>
							</div>
						}
						{
							auth.errMsg &&
							<div className="alert alert-warning fade show" role="alert">
								<strong>{auth.errMsg}</strong>
							</div>
						}
						<Form onSubmit={onLogin} className='py-5'>
							<Input name="email" label="Email :" block placeholder="Email"></Input>
							<Input name="password" label="Password :" block placeholder="Password"></Input>
							<Link className='text-decoration-none text-pallet-1 px-5' to="/forgptpassword"> Forgot Password?</Link>
							<Button type="submit" block variant='pallet-1 radius my-5 py-3' > Login </Button>
							<Button block variant='pallet-1 radius mb-5 py-3'><FcGoogle size={30} />  Login With Google</Button>
						</Form>
					</div>
					<div className='d-grid'>
						<Card className='shadow position-absolute top-100 start-50 translate-middle radius'>
							<Row xs={1} md={2} className="g-4 ">
								<Col>
									<Card.Body>
										<Card.Title>Get your member card now!</Card.Title>
										<Card.Text>
											Let&lsquos;s join with our member and enjoy the deals.
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
export default Login