import React from 'react'
import Input from "../components/Input"

export const Login = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    {/* Left */}
                    <div className='col-6 background-login'>

                    </div>
                    {/* Right */}
                    <div className='col-6'>
                        <Input block placeholder="Username"></Input>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login