import React from 'react'
import { WithData } from './HOC/withInputData'

export default function SoupInputs({ handleChangeValues, formValues }) {
    return(
        <>
            <WithData
                    id='spiciness_scale'
                    name='spiciness_scale'
                    labelid='spiciness_scale-label'
                    value={formValues.spiciness_scale || ''}
                    type='number'
                    variant='outlined' 
                    inputProps={{step: '0', min: '1', max: '8'}}
                    onChange={handleChangeValues}
                    required
                    input={'spiciness scale'}
            />
        </>
    )
}