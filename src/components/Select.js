import React from 'react'
import Form from 'react-bootstrap/Form'

export const Select = ({ variant, block, placeholder, padding, children, version, ...rest }) => {
    return (
        <>
            <div className={block ? `d-grid ${padding ? padding : 'px-5 py-2 my-2'}` : `d-inline-block ${padding ? padding : 'px-5'}`} >
                <Form.Select className='border-radius-xl' size="lg">
                    {children}
                </Form.Select>
            </div>
        </>
    )
}

export default Select