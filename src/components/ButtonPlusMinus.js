import React, { useEffect } from 'react'
import Button from './Button'
import { increment, decrement } from '../redux/actions/buttons'
import { useDispatch, useSelector } from 'react-redux'

const ButtonPlusMinus = () => {
    const buttons = useSelector(state=>state.buttons)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(buttons);
    }, [buttons])
    
    const onIncrement = (e)=>{
        e.preventDefault()
        dispatch(increment())
      }
    
      const onDecrement = (e)=>{
        e.preventDefault()
        dispatch(decrement())
      }
	return (
		<div className='w-75 h-75 py-3 border border-primary border-2 radius d-flex align-items-center justify-content-around'>
			<Button onClick={onDecrement} variant=' fs-3 bg-none fw-bold'>-</Button>
			<div className='fs-3 fw-bold pps'>{buttons.value}</div>
			<Button onClick={onIncrement} variant=' fs-3 bg-none fw-bold'>+</Button>
		</div>
	)
}

export default ButtonPlusMinus