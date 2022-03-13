import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import ModalCheckout from '../components/ModalCheckout';
import ModalCo from '../components/ModalCo';
import { editTransaction, getUserTransaction } from '../redux/actions/transaction';
import { RiBankFill } from "react-icons/ri";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import Button from '../components/Button';

export const Checkout = ({getUserTransaction}) => {
    const {transaction: trc} = useSelector(state => state)
    const token = window.localStorage.getItem('token')
    useEffect(() => {
        getUserTransaction(token)
    }, [getUserTransaction ,token])
    // const onCO = () => {
    //     trc.transaction.map((data, idx) => {
    //         editTransaction(data)
    //     })
        
    // }
    return(
        <Layout>
            <div className='checkout-bg pb-5'>
                <div className='container text-light'>
                    <h1 className='c-out fw-bold fs-1 py-5'>Checkout your item now!</h1>
                    {!trc.isLoading &&
                    <div className='row py-5 order-detail'>
                        <div className='cart col-12 col-md-6'>
                            <ModalCheckout data={trc.transaction}></ModalCheckout>
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
                            <Button block variant='pallet-1 radius' version={'input-normal'}>Confirm and Pay</Button>
                        </div>
                        {console.log(trc)}
                    </div>}
                    {trc.isError && <div>{trc.errorMsg}</div>}
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({transaction: state.transaction})
const mapDispatchToProps = {getUserTransaction}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
