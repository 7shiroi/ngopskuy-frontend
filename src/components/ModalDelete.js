import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import trashIcon from '../assets/images/trash-icon.png'
import { deleteHistory, getHistory } from '../redux/actions/history';
import loadingGif from '../assets/images/Ajux_loader.gif'

export const ModalDelete = ({ id, img, product, price, status, userName, variant = "bg-white", deleteHistory, getHistory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [onLoad, setOnload] = useState(false)
    const { history: hist } = useSelector(state => state)
    const token = window.localStorage.getItem('token')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // useEffect(() => {
    //     getHistory(token)
    // }, [getHistory, token])
    const onShow = () => {
        setIsOpen(true)
    }
    const onHidden = () => {
        setIsOpen(false)
    }
    const onDelete = () => {
        try {
            deleteHistory(id, token)
        } catch (e) {
            console.log(e)
        } finally {
            getHistory(token)
            if (!hist.isLoading) {
                console.log(hist.history)
                navigate('/my-history')
            }
        }
    }
    return (
        <div className={`block position-relative radius ${variant}`} style={{ height: '100%' }}>
            {onLoad && navigate('/my-history')}
            <div className='d-flex align-items-center p-3'>
                <div className='img-fit'>
                    <img src={img} alt='corndog' width='50' height='50' className='rounded-circle' />
                </div>
                <div className="about px-3 text-pallet-1" style={{ fontSize: '15px' }}>
                    <p className='py-0 my-0'>{userName}</p>
                    <p className='fs-6 fw-bold py-0 my-0'>{product}</p>
                    <p className='py-0 my-0'>IDR {price}</p>
                    <p className='py-0 my-0'>{status}</p>
                </div>
            </div>
            {!isOpen &&
                <div className='clickDelete bg-transparent position-absolute top-0 start-0' onClick={onShow}></div>}
            {isOpen &&
                <div className='clickDelete bg-dark bg-opacity-10 position-absolute top-0 start-0' onClick={onShow}></div>}
            {isOpen && <div className='position-absolute top-0 end-0 translate-middle-y d-flex'>
                <div className="icon-trash bg-pallet-1 text-center me-3">
                    <div onClick={onDelete}>
                        <img src={trashIcon} alt='delete-icon'
                        // onClick={ () => {
                        //     dispatch(deleteHistory(id, token))
                        //     navigate('/my-history')
                        //     }}
                        />
                    </div>
                </div>
                <div className='icon-close text-pallet-1 text-center bg-warning p-0 m-0' onClick={onHidden}>X</div>
            </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({ history: state.history })
const mapDispatchToProps = { deleteHistory, getHistory }
export default connect(mapStateToProps, mapDispatchToProps)(ModalDelete);
