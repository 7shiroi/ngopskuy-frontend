import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

export const NavbarHome = () => {
	const auth = useSelector(state => state.auth)
	const tokens = useSelector(state => state.auth.token)
	console.log(auth.userData)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const goLogin = () => {
		navigate(`/login`)
	}
	const goSignUp = () => {
		navigate(`/signup`)
	}
	useEffect(() => {
		const token = window.localStorage.getItem('token')
		dispatch(getProfile(token))
	}, [])
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-pallet-4">
			<div className="container py-4">
				<div className="navbar-brand rb fw-bold text-pallet-1" href="#">NgopSkuY</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						{auth.userData.id_role === 3 &&
							<li className="nav-item my-auto mx-auto ">
								<Link className='nav-link rb fw-bold text-pallet-1 fs-5' aria-currrent='page' to='/'>Home</Link>
							</li>
						}
						{auth.userData.id_role === 1 || auth.userData.id_role === 2 &&
							<li className="nav-item my-auto mx-auto ">
								<Link className='nav-link rb fw-bold text-pallet-1 fs-5' aria-currrent='page' to='/dashboard'>Home</Link>
							</li>
						}
						{auth.userData.id_role === 3 &&
							<li className="nav-item my-auto mx-auto">
								<Link className='nav-link rb fs-5' aria-currrent='page' to='/product'>Product</Link>
							</li>
						}
						{auth.userData.id_role === 1 || auth.userData.id_role === 2 &&
							<li className="nav-item my-auto mx-auto">
								<Link className='nav-link rb fs-5' aria-currrent='page' to='/product-admin'>Product Admin</Link>
							</li>
						}
						{auth.userData.id_role === 3 &&
							<li className="nav-item my-auto mx-auto">
								<Link className='nav-link rb fs-5' aria-currrent='page' to='/my-cart'>My Cart</Link>
							</li>
						}
						{auth.userData.id_role === 1 || auth.userData.id_role === 2 &&
							<li className="nav-item my-auto mx-auto">
								<Link className='nav-link rb fs-5' aria-currrent='page' to='/cart'>Cart</Link>
							</li>
						}
						{auth.userData.id_role === 3 &&
							<li className="nav-item my-auto mx-auto">
								<Link className='nav-link rb fs-5' aria-currrent='page' to='/my-history'>My History</Link>
							</li>
						}
						{auth.userData.id_role === 1 || auth.userData.id_role === 2 &&
							<li className="nav-item my-auto mx-auto">
								<Link className='nav-link rb fs-5' aria-currrent='page' to='/history'>History</Link>
							</li>
						}
						{auth.token &&
							<li className="nav-item dropdown mx-auto">
								<div className="nav-link dropdown-toggle img-profile-login" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
									aria-expanded="false">
									<Link className="" to="/profile">
										<img src={auth.userData.image || Profile} width="50"
											height="50" alt="Avatar Logo" className=" rounded-pill" />
									</Link>
								</div>

								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<Link className="dropdown-item" to="/profile">Profile</Link>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>

									<li onClick={() => { dispatch({ type: 'AUTH_LOGOUT' }); navigate('/') }} style={{ cursor: 'pointer' }} className="dropdown-item" to="/login">Logout</li>

								</ul>
							</li>
						}
						{auth.token === null &&
							<li className="d-flex align-item-center d-grid">
								<div className=' d-flex justify-content-start'>
									<Button onClick={goLogin} block variant='pallet-4 px-5 py-2 fs-5 rb text-pallet-1 fw-bold' padding='mx-1' >Login</Button>
								</div>
								<div className=' d-flex justify-content-end'>
									<Button onClick={goSignUp} block variant='pallet-1 px-5 py-0 fs-5 rb' padding='mx-1 py-0' >Sign Up</Button>
								</div>
							</li>
						}
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
			</div >
		</nav >
	)
}

export default NavbarHome