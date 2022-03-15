import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import ModalDelete from '../components/ModalDelete';
import { getHistoryAdmin, deleteHistory } from '../redux/actions/history';
import { Form } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export const HistoryAdmin = ({ getHistoryAdmin }) => {
    const { history: hist } = useSelector(state => state)
    const token = window.localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        getHistoryAdmin(token)
    }, [getHistoryAdmin, token])
    const goSearch = () => {
        navigate('/search-history')
    }
    return (
        <Layout>
            {token == null && <Navigate to='/login' />}
            <div className='history-bg'>
                <div className='container py-5'>
                    <div>
                        <Form onClick={goSearch} className='position-relative'>
                            <Form.Control name='search' placeholder='Search' className='bg-white rounded-pill px-3' />
                            <FaSearch className='position-absolute top-50 end-0 translate-middle-y me-3' color='#000' />
                        </Form>
                    </div>
                    <div className='title-section text-center py-5 text-light'>
                        <h1 className="fw-bold">Let’s see what you have bought!</h1>
                        <p>Long press to delete item</p>
                    </div>
                    {hist.isError &&
                        <div className='text-center text-light fs-3'>{hist.errorMsg}</div>}
                    {!hist.isLoading && !hist.isError && <div className='row my-auto'>
                        {console.log(hist.history)}
                        {hist.history.map((data, idx) => {
                            return (
                                <div key={data.id} className='col-12 col-md-6 col-lg-4 my-2'>
                                    <ModalDelete id={data.id} img={data.image} product={data.product_name} price={data.total_price} status={data.status}></ModalDelete>
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
const mapDispatchToProps = { getHistoryAdmin, deleteHistory }
export default connect(mapStateToProps, mapDispatchToProps)(HistoryAdmin)