
import React from 'react'

export const Input = ({ variant, block, placeholder, padding, version, ...rest }) => {
    return (
        <div className={block ? `d-grid ${padding ? padding : 'px-5 my-2'}` : `d-inline-block ${padding ? padding : 'px-5'}`} >
            <input type="text" className={`py-3 px-4  outline-secondary radius ${version}`} placeholder={`${placeholder ? placeholder : ''}`} {...rest} />
        </div>
    )
}

export default Input