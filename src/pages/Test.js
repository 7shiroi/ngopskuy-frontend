import React from 'react'
import Button from "../components/Button"
import Input from "../components/Input"
import InputUnderline from "../components/InputUnderline"
import ModalDelete from '../components/ModalDelete'
import Select from "../components/Select"
import pic from "../assets/images/corndog-lezat.jpg"

export const Test = () => {
    const data = {
        img: pic,
        name: 'Corn dog',
        price: 34000,
        isDelivered: 'Delivered'
    }
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
            
            <div className='row py-5' style={{backgroundColor: 'black'}}>
                <div className='col-12 col-md-6 col-lg-4'>
            <ModalDelete img={pic} product='Corn dog' price='40000' status='Delivered'></ModalDelete></div>
            <div className='col-12 col-md-6 col-lg-3'>
            </div>
            </div>
        </>

    )
}

export default Test