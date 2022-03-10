import React from 'react'
import Button from "../components/Button"
import Input from "../components/Input"
import InputUnderline from "../components/InputUnderline"
import Select from "../components/Select"

export const Test = () => {
    return (
        <>
            <Button block variant='danger' version={'input-normal'}> Login </Button>
            <Input block placeholder="Username"></Input>
            <InputUnderline block version="input-underline" placeholder="Username"></InputUnderline>
            <Select block>
                <option>opt1</option>
                <option>opt1</option>
                <option>opt1</option>
                <option>opt1</option>
            </Select>
        </>

    )
}

export default Test