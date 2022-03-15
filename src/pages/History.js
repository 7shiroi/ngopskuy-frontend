import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import ModalDelete from '../components/ModalDelete';
import { getHistory, deleteHistory } from '../redux/actions/history';
import { useNavigate } from 'react-router-dom'

export const History = ({ getHistory, deleteHistory }) => {
    const { history: hist } = useSelector(state => state)
    const tokens = useSelector(state => state.auth)
    const token = window.localStorage.getItem('token')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (!tokens.token) {
            const token = window.localStorage.getItem('token')
            if (token) {
                dispatch(getHistory(token))
            } else {
                window.alert('Please login first')
                navigate('/login')
            }
        }
    }, [getHistory, token])
    return (
        <Layout>
            <div className='history-bg'>
                <div className='container py-5'>
                    <div className='title-section text-center py-5 text-light'>
                        <h1 className="fw-bold">Let’s see what you have bought!</h1>
                        <p>Long press to delete item</p>
                    </div>
                    {hist.isError &&
                        <div className='text-center text-light fs-3'>{hist.errorMsg}</div>}
                    {!hist.isLoading && !hist.isError && <div className='row my-auto'>
                        {console.log(!hist.history)}
                        {hist.history.map((data, idx) => {
                            return (
                                <div key={data.id} className='col-12 col-md-6 col-lg-4 my-2'>
                                    <ModalDelete id={data.id} img={data.image} product={data.name} price={data.total_price} status={data.status}></ModalDelete>
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({ history: state.history })
const mapDispatchToProps = { getHistory, deleteHistory }
export default connect(mapStateToProps, mapDispatchToProps)(History)