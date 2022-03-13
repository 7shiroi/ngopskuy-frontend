import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import ModalDelete from '../components/ModalDelete';
import { getHistory, deleteHistory } from '../redux/actions/history';

export const History = ({getHistory, deleteHistory}) => {
    const { history: hist } = useSelector(state => state)
    const token = window.localStorage.getItem('token')
    useEffect (()=>{
        console.log(token)
        getHistory(token)
    },[getHistory, token])
    return (
        // <Layout>
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
                                <ModalDelete id={data.id} img={data.image} product={data.name} price={'40000'} status='Delivered'></ModalDelete>
                            </div>
                        )
                    })}
                </div>}
                    {console.log(hist.history)}
                    {console.log(!hist.isLoading)}
            </div>
        </div>
        // </Layout>
    )
}

const mapStateToProps = state => ({history: state.history})
const mapDispatchToProps = {getHistory, deleteHistory}
export default connect(mapStateToProps, mapDispatchToProps)(History);
