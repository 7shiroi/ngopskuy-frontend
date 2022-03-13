import React from 'react'

import Button from '../components/Button'
import Input from '../components/Input'
import InputUnderline from '../components/InputUnderline'
import Select from '../components/Select'
import HistoryCard from '../components/HistoryCard'
import SizeCard from '../components/SizeCard'
import hazelnut from '../assets/images/hazelnut.png'
import CardMenu from '../components/CardMenu'
import Helmets from '../components/Helmets'
import pic from "../assets/images/corndog-lezat.jpg"
import ModalDelete from '../components/ModalDelete'


export const Test = () => {
      const data = {
        img: pic,
        name: 'Corn dog',
        price: 34000,
        isDelivered: 'Delivered'
    }
	return (
		<>
			<Helmets children={"Test"} />
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

				<HistoryCard cardName={"Veggie Tomato Mix"} cardPrice={"IDR 34.000"} cardImage={hazelnut} cardStatus={"Delivered"} />

				<div>
					<SizeCard radioName={'R'} value="R" />
					<SizeCard radioName={'L'} value="L" />
					<SizeCard radioName={'XL'} value="XL" />
				</div>
				<CardMenu cardName={"Veggie Tomato Mix"} cardPrice={"IDR 34.000"} cardImage={hazelnut} cardDiscount={"10%"} />
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