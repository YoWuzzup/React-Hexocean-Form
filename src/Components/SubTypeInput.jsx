import React from 'react'
import { FormGroup } from '@material-ui/core'
import { PizzaInputs, SoupInputs, SandwichInputs } from './'

export default function SubTypeInput(props) {
    const {name, formValues, handleChangeValues } = props

    let inputs
    switch (name) {
        case 'pizza':
            inputs = <PizzaInputs 
                handleChangeValues={handleChangeValues} 
                formValues={formValues}
            />
            break;
        case 'soup':
            inputs = <SoupInputs 
                handleChangeValues={handleChangeValues} 
                formValues={formValues}
            />
            break;
        case 'sandwich':
            inputs = <SandwichInputs 
                handleChangeValues={handleChangeValues} 
                formValues={formValues}
            />
            break;
        default:
            break;
    }

    return (
        <FormGroup required>
        { 
            inputs
        }
        </FormGroup>
    )
}