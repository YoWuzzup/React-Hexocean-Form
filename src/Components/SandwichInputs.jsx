import React from 'react'
import { WithData } from './HOC/withInputData'

export default function SandwichInputs({ handleChangeValues, formValues }) {
    return(
        <>
            <WithData
                id='slices_of_bread'
                name='slices_of_bread'
                labelid='slices_of_bread-label'
                value={formValues.slices_of_bread || ''}
                type='number' 
                variant='outlined' 
                onChange={handleChangeValues}
                required
                input={'slices of bread'}
            />
        </>
    )
}