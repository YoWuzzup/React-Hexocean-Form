import React from 'react'
import { InputLabel, Input } from '@material-ui/core'

export default function SoupInputs({ handleChangeValues, formValues }) {
    return(
        <>
            <InputLabel id='spiciness_scale-label' required >spiciness scale</InputLabel>
            <Input 
                id='spiciness_scale'
                name='spiciness_scale'
                labelid='spiciness_scale-label'
                value={formValues.spiciness_scale || ''}
                type='number' 
                variant='outlined' 
                inputProps={{step: '0', min: '1', max: '8'}}
                onChange={handleChangeValues}
            />
        </>
    )
}