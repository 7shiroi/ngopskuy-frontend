import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'
import { BiPencil } from 'react-icons/bi'

export const CardMenu = ({ cardName, newClass, cardPrice, cardDiscount, cardImage }) => {
    return (
        <div id="img-object-home" className={`${newClass} shadow-lg img-thumbnail bg-pallet-4 `}>
            <div className='d-flex justify-content-center position-relative'>
                <Image className='' width={150} height={150} roundedCircle src={cardImage}></Image>
                <h2 className='bg-pallet-3 d-inline-block py-2 px-2 top-0 start-100 translate-middle rounded-circle position-absolute'>{cardDiscount}</h2>
            </div>
            <h2 className='text-center'>{cardName}</h2>
            <h4 className='text-center'>{cardPrice}</h4>

        </div>

    )
}
export default CardMenu