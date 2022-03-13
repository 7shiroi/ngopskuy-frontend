
import React, { useState } from 'react';
import trashIcon from '../assets/images/trash-icon.png'

export const ModalDelete = ({img, product, price, status}) => {
    const [isOpen, setIsOpen] = useState(false);
    const onShow = () => {
        setIsOpen(true)
    }
    const onHidden = () => {
        setIsOpen(false)
    }
    return (
        <div className='block position-relative radius bg-white' style={{height: '100%'}}>
            <div className='d-flex align-items-center p-3'>
                <div className='img-fit'>
                    <img src={img} alt='corndog' width='50' height='50'/>
                </div>
                <div className="about px-3 text-pallet-1" style={{fontSize: '15px'}}>
                    <p className='fs-4 fw-bold py-0 my-0'>{product}</p>
                    <p className='fs-5 py-0 my-0'>IDR {price}</p>
                    <p className='fs-5  my-0'>{status}</p>
                </div>
            </div>
            {!isOpen &&
            <div className='clickDelete bg-transparent position-absolute top-0 start-0' onClick={onShow}></div>}
            {isOpen &&
            <div className='clickDelete bg-dark bg-opacity-10 position-absolute top-0 start-0' onClick={onHidden} ></div>}
            {isOpen && <div className='position-absolute top-0 end-0 translate-middle-y d-flex'>
                <div className="icon-trash bg-pallet-1 text-center me-3">
                    <img src={trashIcon} alt='delete-icon'/>
                </div>
                <div className='icon-close text-pallet-1 text-center bg-warning p-0 m-0' onClick={onHidden}>X</div>
            </div>
            }
        </div>
    )
}

export default ModalDelete;

