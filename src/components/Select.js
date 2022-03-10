/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Form from 'react-bootstrap/Form'

export const Select = ({ label, variant, block, padding, children, version, ...rest }) => {
	return (
		<><label className='px-5'><b>{label}</b></label>
			<div className={block ? `d-grid ${padding ? padding : 'px-5 py-2 my-2'}` : `d-inline-block ${padding ? padding : 'px-5'}`} >
				<Form.Select className='radius py-2' size="lg">
					{children}
				</Form.Select>
			</div>
		</>
	)
}

export default Select