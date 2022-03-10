
import React from 'react'

export const Input = ({ label = "", variant, block, placeholder, padding, version, ...rest }) => {
    return (
        <>
            <label className='px-5'><b>{label}</b></label>
            <div className={block ? `d-grid ${padding ? padding : ' my-2'}` : `d-inline-block ${padding ? padding : ''}`} >
                <input type="text" className={`py-2 px-4  radius ${version}`} placeholder={`${placeholder ? placeholder : ''}`} {...rest} />
            </div>
        </>

    )
}

export default Input