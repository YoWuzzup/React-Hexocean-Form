import React from 'react'
import { InputLabel, Input } from '@material-ui/core'

export default function SandwichInputs({ handleChangeValues, formValues }) {
    return(
        <>
            <InputLabel id='slices_of_bread-label' required >slices of bread</InputLabel>
            <Input 
                id='slices_of_bread'
                name='slices_of_bread'
                labelid='slices_of_bread-label'
                value={formValues.slices_of_bread || ''}
                type='number' 
                variant='outlined' 
                onChange={handleChangeValues}
            />
        </>
    )
}