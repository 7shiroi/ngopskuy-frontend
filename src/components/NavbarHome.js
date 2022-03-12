/* eslint-disable no-import-assign */
/* eslint-disable no-redeclare */
import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export const NavbarHome = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-warning">
			<div className="container py-4">
				<div className="navbar-brand rb fw-bold text-primary" href="#">NgopSkuY</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item mx-3">
							<Link className='nav-link rb fw-bold text-primary fs-5' aria-currrent='page' to='/'>Home</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className='nav-link rb fs-5' aria-currrent='page' to='/'>Product</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className='nav-link rb fs-5' aria-currrent='page' to='/'>Yourt Cart</Link>
						</li>
						<li className="nav-item mx-3">
							<Link className='nav-link rb fs-5' aria-currrent='page' to='/'>History</Link>
						</li>
					</ul>
					<div className="d-flex">
						<div className=' d-flex align-items-center'>
							<Button block variant='warning px-5 py-2 fs-5 rb text-primary fw-bold' padding='mx-1' >Login</Button>
						</div>
						<div className=' d-flex align-items-center'>
							<Button block variant='primary px-5 py-2 fs-5 rb' padding='mx-1' >Sign Up</Button>
						</div>
						{/* <div className='w-100'>
							<Button block variant='primary px-5 py-2 '>Sign Up</Button>
						</div> */}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavbarHome