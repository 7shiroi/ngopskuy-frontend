import React, { useState } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export const SizeCard = ({ radioName, value }) => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    return (
        <>
            <ButtonGroup className='px-2 py-2'>
                <ToggleButton
                    className='rounded-circle'
                    id={""}
                    type="radio"
                    variant={"dark" ? 'outline-pallet-1' : 'outline-pallet-3'}
                    name="size"
                    value={value}
                    checked={radioValue === value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}>
                    {radioName}
                </ToggleButton>
            </ButtonGroup>
        </>
    )
}
export default SizeCard