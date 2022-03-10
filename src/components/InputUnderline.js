import React from 'react'

export const InputUnderline = ({ variant, block, placeholder, padding, version, ...rest }) => {
    return (
        <>
            <div className={block ? `d-grid ${padding ? padding : 'px-5 my-2'}` : `d-inline-block ${padding ? padding : 'px-5'}`} >
                <input type="text" className={`py-3 wrapper px-4 radius ${version}`} placeholder={`${placeholder ? placeholder : ''}`} {...rest} />
            </div>
            <span className="underline"></span>
        </>
    )
}

export default InputUnderline