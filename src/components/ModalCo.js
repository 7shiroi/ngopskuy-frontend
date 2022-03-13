import React from 'react';

export const ModalCo = ({childOne, childTwo, childThree}) => {
    return(
        <div className="co-card bg-white p-3 text-dark">
            <div className='border-bottom'>{childOne}</div>
            <div className='border-bottom'>{childTwo}</div>
            <div className='border-bottom'>{childThree}</div>
        </div>
    )
}

export default ModalCo