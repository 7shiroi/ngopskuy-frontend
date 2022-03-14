import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import trashIcon from '../assets/images/trash-icon.png'
// import { deleteHistory, getHistory } from '../redux/actions/history';

export const ModalDelete = ({id, img, product, price, status, toDelete}) => {
    const [isOpen, setIsOpen] = useState(false);
    const token = window.localStorage.getItem('token')
    const dispatch = useDispatch()
    const onShow = () => {
        setIsOpen(true)
    }
    const onHidden = () => {
        setIsOpen(false)
    }
    const onDelete = (id) => {
        // dispatch(deleteHistory(id))
        // dispatch(getHistory(token))
    }
    return (
        <div className='block position-relative radius bg-white' style={{height: '100%'}}>
            <div className='d-flex align-items-center p-3'>
                <div className='img-fit'>
                    <img src={img} alt='corndog' width='50' height='50' className='rounded-circle'/>
                </div>
                <div className="about px-3 text-pallet-1" style={{fontSize: '15px'}}>
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
                <div className="icon-trash bg-pallet-1 text-center me-3" onClick={onDelete(id)}>
                    <img src={trashIcon} alt='delete-icon'/>
                </div>
                <div className='icon-close text-pallet-1 text-center bg-warning p-0 m-0' onClick={onHidden}>X</div>
            </div>
            }
        </div>
    )
}

export default ModalDelete;
