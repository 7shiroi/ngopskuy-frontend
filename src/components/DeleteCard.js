import React from 'react'
import Button from './Button'

export const DeleteCard = () => {
    return (
        <>
        <div className="bg-white rounded mx-auto p-4" style={{width: '300px'}}>
            <p className='text-center'>Are you sure want to delete this product?</p>
            <div className='row'>
                <div className='col-6'>
                    <Button block variant='pallet-1 radius' version={'input-normal'}>Cancel</Button>
                </div>
                <div className='col-6'>
                    <Button block variant='pallet-1 radius' version={'input-normal'}>Delete</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default DeleteCard