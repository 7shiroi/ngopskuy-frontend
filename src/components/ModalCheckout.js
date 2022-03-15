import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format'
import { useDispatch } from 'react-redux';
import trashIcon from '../assets/images/trash-icon.png'
import { deleteCart } from '../redux/actions/cart';

export const ModalCheckout = ({ data }) => {
    const token = window.localStorage.getItem('token')
    let totalPrice = 0
    const dispatch = useDispatch()
    const [price, setPrice] = useState([])
    useEffect(() => {
        // data.map((evData, idx)=>{
        //     return setPrice(price.push(evData.total_price))
        // })
        // price.forEach(x=>{
        //     totalPrice += x
        // })
    })
    const onDelete = (id) => {
    }
    return (
        <div className="co-card bg-white p-5 text-dark">
            <h1 className='fs-3 my-4 text-center'>Order Summary</h1>
            <div className="order-list border-bottom overflow-auto" style={{ width: '100%' }}>
                <div className="data-order">
                    {data?.map((has, idx) => {
                        return (
                            <div className='row py-3'>
                                <div className='img-fit col-2'>
                                    <img src={has.image} alt='corndog' width='50' height='50' className='rounded' />
                                </div>
                                <div className='detail col-10 position-relative ps-3'>
                                    <p className='py-0 my-0'>{has.name}</p>
                                    <p className='py-0 my-0'>X {has.quantity}</p>
                                    <div className="icon-trash bg-pallet-1 text-center position-absolute top-0 end-0 translate-middle-x">
                                    <div onClick={() => {
                                        dispatch(deleteCart(has.id, token))
                                        }}><img src={trashIcon} alt='delete-icon'/></div>
                                    </div>
                                    <p className='d-flex position-absolute top-100 end-0 translate-middle-x'>IDR <CurrencyFormat value={has.total_price} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='price-detail d-flex my-3'>
                <div className='subtitle'>
                    <p className='py-0 my-0'>Subtotal</p>
                    <p className='py-0 my-0'>TAX AND FEES</p>
                    <p className='py-0 my-0'>SHIPPING</p>
                </div>
                <div className='sub-price ms-auto'>
                    <p className='py-0 my-0'>IDR <CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
                    <p className='py-0 my-0'>IDR <CurrencyFormat value={20000} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
                    <p className='py-0 my-0'>IDR <CurrencyFormat value={10000} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
                </div>
            </div>
            <div className='total-payment d-flex'>
                <p className='my-auto fs-4 fw-bold'>TOTAL</p>
                <p className='py-0 my-auto ms-auto'>IDR <CurrencyFormat value={totalPrice + 20000 + 10000} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
            </div>
        </div>
    )
}

export default ModalCheckout