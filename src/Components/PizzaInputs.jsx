import React from 'react'
import { WithData } from './HOC/withInputData'

export default function PizzaInputs({ handleChangeValues, formValues }) {
    return(
        <>
            <WithData 
                id='no_of_slices'
                name='no_of_slices' 
                labelid='no_of_slices-label'
                value={formValues.no_of_slices || ''}
                type='number'
                variant='outlined'
                onChange={handleChangeValues}
                required 
                input={'number of slices'}
            />
            
            <WithData
                id='diameter'
                name='diameter'
                labelid='diameter-label'
                value={formValues.diameter || ''}
                type='number' 
                variant='outlined'  
                inputProps={{step: '0.1'}}
                onChange={handleChangeValues}
                required
                input={'diameter'}
            />
        </>
    )
}
