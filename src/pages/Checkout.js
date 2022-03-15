import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import ModalCheckout from '../components/ModalCheckout'
import ModalCo from '../components/ModalCo'
import { getCart, checkoutCart } from '../redux/actions/cart'
import { RiBankFill } from "react-icons/ri";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";

export const Checkout = ({getCart, checkoutCart}) => {
    const {cart} = useSelector(state => state)
    const [transactiontId, setTransactionId] = useState([])
    const token = window.localStorage.getItem('token')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect (() => {
        getCart(token)
    }, [token])
    const onCO = () => {
        cart.cart.map((data) => {
            return setTransactionId(transactiontId.push(data.id))
        })
        transactiontId.forEach(x=>{
            const data = {}
            data.id = x
            data.status = 2
            checkoutCart(data, token)
        })
        navigate('/my-history')
    }
    return (
        <Layout>
            <div className='checkout-bg pb-5'>
                <div className='container text-light'>
                    <h1 className='c-out fw-bold fs-1 py-5'>Checkout your item now!</h1>
                    {cart.isError && <h>{cart.errorMsg}</h>}
                    {cart.cart &&
                    <div className='row py-5 order-detail'>
                        <div className='cart col-12 col-md-6'>
                            <ModalCheckout data={cart.cart}></ModalCheckout>
                        </div>
                        <div className='col-12 col-md-5 ms-auto'>
                            <div className='address'>
                                <div className='d-flex align-items-center'>
                                    <p className='fw-bold fs-4'>Address detail</p>
                                    <p className='ms-auto'>edit</p>
                                </div>
                                <ModalCo childOne='Delivery to Iskandar Street'
                                childTwo='Km 5 refinery road oppsite re
                                public road, effurun, Jakarta'
                                childThree='+62 81348287878'></ModalCo>
                            </div>
                            <div className='payment'>
                                <p className='fw-bold fs-4'>Payment method</p>
                                <ModalCo
                                childOne={<div class="form-check">
                                <input class="form-check-input" type="radio" name="payment_method" id="card" value="1" />
                                <label class="form-check-label" for="card">
                                  <BsFillCreditCard2FrontFill />Cash
                                </label>
                                </div>}
                                childTwo={
                                <div class="form-check">
                                  <input class="form-check-input" type="radio" name="payment_method" id="bank" value="2" />
                                  <label class="form-check-label" for="bank">
                                    <RiBankFill /> Bank Account
                                  </label>
                                </div>}
                                childThree={
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="payment_method" id="cod" value="3" />
                                      <label class="form-check-label" for="cod">
                                        <GrDeliver /> Cash on delivery
                                      </label>
                                </div>}></ModalCo>
                            </div>
                            <div onClick={onCO}>
                            <Button block variant='pallet-1 radius' version={'input-normal'}>Confirm and Pay</Button>
                            </div>
                        </div>
                        {console.log(cart)}
                    </div>}
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => ({cart: state.cart})
const mapDispatchToProps = {getCart, checkoutCart}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
