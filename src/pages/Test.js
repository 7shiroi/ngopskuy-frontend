import React from 'react'
import Button from "../components/Button"
import Input from "../components/Input"
import InputUnderline from "../components/InputUnderline"
import Select from "../components/Select"

export const Test = () => {
    return (
        <>
            <form>
                <Button block variant='pallet-1 radius' version={'input-normal'}> Login </Button>
                <Input label="Username :" block placeholder="Username"></Input>
                <InputUnderline label="Username :" block version="input-underline" placeholder="Username"></InputUnderline>
                <Select label="Username :" block>
                    <option>opt1</option>
                    <option>opt1</option>
                    <option>opt1</option>
                    <option>opt1</option>
                </Select>
            </form>
        </>

    )
}

export default Test