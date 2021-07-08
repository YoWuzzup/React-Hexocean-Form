import React from 'react'
import { InputLabel, Input } from '@material-ui/core'

// the wrapped component
const baseInputComponent = props =>{
    return(
    <>
        <InputLabel id={`${props.name}-label`} >{props.input}</InputLabel>
        <Input {...props} />
    </>)
}

// the HOC
const  withInputData = (WrappedComponent) => {
    return (props) => (
        <>
            <WrappedComponent {...props} />
        </>
    );
}

export const WithData = withInputData(baseInputComponent)