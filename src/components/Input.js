/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'

export const Input = ({ label = '', variant, block, placeholder, padding, version, ...rest }) => {
	return (
		<>
			<label className='px-5'><b>{label}</b></label>
			<div className={block ? `d-grid ${padding ? padding : 'px-5 my-2'}` : `d-inline-block ${padding ? padding : 'px-5'}`} >
				<input type="text" className={`py-2 px-4  outline-secondary radius ${version}`} placeholder={`${placeholder ? placeholder : ''}`} {...rest} />
			</div>
		</>

	)
}

export default Input