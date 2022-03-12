import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import InputUnderline from '../components/InputUnderline'
import Select from '../components/Select'
import HistoryCard from '../components/HistoryCard'
import SizeCard from '../components/SizeCard'

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
				<HistoryCard cardName={'Veggie Tomato Mix'} cardPrice={'IDR 34.000'} cardStatus={'Delivered'} />
				<div>
					<SizeCard radioName={'R'} value="R" />
					<SizeCard radioName={'L'} value="L" />
					<SizeCard radioName={'XL'} value="XL" />
				</div>

			</form>
		</>

	)
}

export default Test