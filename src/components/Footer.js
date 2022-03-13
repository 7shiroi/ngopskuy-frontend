import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import Logo from '../assets/images/Logo.png'
import Navbar from 'react-bootstrap/Navbar'

export const Footer = () => {
	return (
		<footer className="bg-pallet-4 container-fluid g-0">
			<div className="container">
				<div className="pt-6 pb-4">
					<div className='row justify-content-between'>
						<div className='col-3'>
							<div className='mb-4'>
								<Navbar.Brand href="/">
									<img
										src={Logo}
										width="120"
										height="120"
										className="d-inline-block align-top"
										alt="React Bootstrap logo"
									/>
								</Navbar.Brand>
							</div>
							<div className='mb-4'>
								<div className='rb fw-medium fw-5 '>
									Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
								</div>
							</div>
							<div className='mb-4'>
								<div className='d-flex'>
									<div className='icon bg-pallet-1 me-3'><FaFacebookF /></div>
									<div className='icon bg-pallet-1 mx-3'><FaTwitter /></div>
									<div className='icon bg-pallet-1 fs-4 mx-3'><FaInstagram /></div>
								</div>
							</div>
							<div>
								<div className='text-secondary rb '>©2020CoffeeStore</div>
							</div>
						</div>
						<div className='col-5'>
							<div className='row'>
								<div className='col '>
									<div className='rb fw-bold text-pallet-1 fs-5'>Produk</div>
									<ul>
										<li className='py-1'>Download</li>
										<li className='py-1'>Pricing</li>
										<li className='py-1'>Locations</li>
										<li className='py-1'>Countries</li>
										<li className='py-1'>BLog</li>
									</ul>
								</div>
								<div className='col '>
									<div className='rb fw-bold text-pallet-1 fs-5'>Engane</div>
									<ul>
										<li className='py-1'>NgopSkuY ?</li>
										<li className='py-1'>FAQ</li>
										<li className='py-1'>About Us</li>
										<li className='py-1'>Privacy Policy</li>
										<li className='py-1'>Terms of Serivice</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer