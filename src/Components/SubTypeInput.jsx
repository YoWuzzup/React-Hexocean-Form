import React from 'react'
import { FormGroup } from '@material-ui/core'
import { PizzaInputs, SoupInputs, SandwichInputs } from './'

export default function SubTypeInput(props) {
    const {name, formValues, handleChangeValues } = props

    let inputs
    if(name === 'pizza'){
        inputs = <PizzaInputs 
                    handleChangeValues={handleChangeValues} 
                    formValues={formValues}
                />
    } else if(name === 'soup'){
        inputs = <SoupInputs 
                    handleChangeValues={handleChangeValues} 
                    formValues={formValues}
                />
    } else if(name === 'sandwich'){
        inputs = <SandwichInputs 
                    handleChangeValues={handleChangeValues} 
                    formValues={formValues}
                />
    }

    return (
        <FormGroup required>
        { 
            inputs
        }
        </FormGroup>
    )
}