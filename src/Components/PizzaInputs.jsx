import React from 'react'
import { InputLabel, Input } from '@material-ui/core'

export default function PizzaInputs({ handleChangeValues, formValues }) {
    return(
        <>
            <InputLabel id='no_of_slices-label' required >number of slices</InputLabel>
            <Input 
                id='no_of_slices'
                name='no_of_slices'
                labelid='no_of_slices-label'
                value={formValues.no_of_slices || ''}
                type='number' 
                variant='outlined' 
                inputProps={{step: '0', min: '1', max: '8'}}
                onChange={handleChangeValues}
                required
            />
            
            <InputLabel id='diameter-label' required>diameter</InputLabel>
            <Input 
                id='diameter'
                name='diameter'
                labelid='diameter-label'
                value={formValues.diameter || ''}
                type='number' 
                variant='outlined'  
                inputProps={{step: '0.1'}}
                onChange={handleChangeValues}
                required
            />
        </>
    )
}
