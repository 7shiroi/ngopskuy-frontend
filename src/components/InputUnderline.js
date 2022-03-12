/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

export const InputUnderline = ({ label, variant, block, placeholder, padding, version, ...rest }) => {
    return (
        <>
            <label className='px-5'><b>{label}</b></label>
            <div className={block ? `d-grid ${padding ? padding : 'px-1 my-2'}` : `d-inline-block ${padding ? padding : ''}`} >
                <input type="text" className={`py-2 wrapper px-4 ${version}`} placeholder={`${placeholder ? placeholder : ''}`} {...rest} />
            </div>
            <span className="underline"></span>
        </>
    )
}

export default InputUnderline