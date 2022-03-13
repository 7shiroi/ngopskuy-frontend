import React from 'react';
import CurrencyFormat from 'react-currency-format'

export const ModalCheckout = ({data}) => {
    return(
        <div className="co-card bg-white p-5 text-dark">
            <h1 className='fs-3 my-4 text-center'>Order Summary</h1>
            <div className="order-list border-bottom overflow-auto" style={{width: '100%'}}>
                <div className="data-order">
                    {data.map((has, idx)=>{
                        return(
                            <div className='row my-3'>
                                <div className='img-fit col-2'>
                                <img src={has.image} alt='corndog' width='50' height='50' className='rounded'/>
                                </div>
                                <div className='detail col-10 position-relative ps-3'>
                                    <p className='py-0 my-0'>{has.product_name}</p>
                                    <p className='py-0 my-0'>X {has.quantity}</p>
                                    <p className='py-0 my-0'>{has.size}</p>
                                    <p className='d-flex position-absolute top-100 end-0 translate-middle'>IDR <CurrencyFormat value={has.total_price} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
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
                    <p className='py-0 my-0'>IDR <CurrencyFormat value={120000} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
                    <p className='py-0 my-0'>IDR <CurrencyFormat value={20000} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
                    <p className='py-0 my-0'>IDR <CurrencyFormat value={10000} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
                </div>
            </div>
            <div className='total-payment d-flex'>
                <p className='my-auto fs-4 fw-bold'>TOTAL</p>
                <p className='py-0 my-auto ms-auto'>IDR <CurrencyFormat value={150000} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
            </div>
        </div>
    )
}

export default ModalCheckout