import React from 'react'

const ButtonPlusMinus = () => {
	return (
		<div className='w-100 py-4 border border-primary border-2 radius d-flex align-items-center justify-content-around'>
			<button className='fs-3 bg-none fw-bold'>+</button>
			<div className='fs-3 fw-bold pps'>0</div>
			<button className='fs-3 bg-none fw-bold'>-</button>
		</div>
	)
}

export default ButtonPlusMinus