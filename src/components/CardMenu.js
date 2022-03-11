import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'
import { BiPencil } from 'react-icons/bi'

export const CardMenu = ({ cardName, cardPrice, cardDiscount, cardImage }) => {
    return (
        <Card body className='d-inline-block rounded-menu mx-2 py-2 bg-pallet-4 '>
            <div className='d-flex justify-content-center '><Image fluid className='d-inline-block position-relative' width={150} roundedCircle src={cardImage}></Image></div>
            <h2 className='text-center'>{cardName}</h2>
            <h4 className='text-center'>{cardPrice}</h4>
            <h2 roundedCircle className='bg-pallet-3 d-inline-block py-2 px-2 top-0 start-100 translate-middle rounded-circle position-absolute'>{cardDiscount}</h2>
        </Card>
    )
}
export default CardMenu