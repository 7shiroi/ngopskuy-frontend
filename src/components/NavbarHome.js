/* eslint-disable no-import-assign */
/* eslint-disable no-redeclare */
import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import Navbar from 'react-bootstrap/Navbar'

export const NavbarHome = () => {
	const navigate = useNavigate()
	const goLogin = () => {
		navigate(`/login`)
	}
	const goSignUp = () => {
		navigate(`/signup`)
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-pallet-4">
			<div className="container">
				<Navbar.Brand href="/">
					<img
						src={Logo}
						width="120"
						height="120"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item mx-3">
							<Link className='nav-link rb fw-bold text-pallet-1 fs-5' aria-currrent='page' to='/'>Home</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className='nav-link rb fs-5' aria-currrent='page' to='/product'>Product</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className='nav-link rb fs-5' aria-currrent='page' to='/cart'>Yourt Cart</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className='nav-link rb fs-5' aria-currrent='page' to='/history'>History</Link>
						</li>
					</ul>
					<div className="d-flex">
						<div className=' d-flex align-items-center'>
							<Button onClick={goLogin} block variant='pallet-4 px-5 py-2 fs-5 rb text-pallet-1 fw-bold' padding='mx-1' >Login</Button>
						</div>
						<div className=' d-flex align-items-center'>
							<Button onClick={goSignUp} block variant='pallet-1 px-5 py-2 fs-5 rb' padding='mx-1' >Sign Up</Button>
						</div>
						{/* <div className='w-100'>
							<Button block variant='pallet-1 px-5 py-2 '>Sign Up</Button>
						</div> */}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavbarHome