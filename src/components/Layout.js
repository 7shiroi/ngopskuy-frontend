/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import NavbarHome from './NavbarHome'
import Footer from './Footer'

const Layout = ({children}) => {
	return (
		<>
			<NavbarHome />
			{children}
			<Footer />
		</>
	)
}

export default Layout