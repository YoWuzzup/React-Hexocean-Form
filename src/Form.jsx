import React, { useState } from 'react'
import { TextField, FormControl, FormGroup, Select, MenuItem, InputLabel, Input, Button } 
    from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TimeField from 'react-simple-timefield'

const useStyles = makeStyles(theme=>({
    root:{
        width:'100%',
        height: '100vh',
        backgroundColor: '#000',
        opacity: '.7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form:{
        width:'250px',
        borderRadius: '20px',
        margin: '0 auto',
        padding: '40px 20px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'basis',
        backgroundColor: '#fff',
        '& > *':{
            margin: '15px 0',
            width: '100%'
        }
    }
}))

const dishTypesData = [
    {
        name: 'pizza',
        options: {
            no_of_slices: 0, 
            diameter: 0,
            type: 'number'
        }
    },
    {
        name: 'soup',
        options: {
            spiciness_scale: 0, 
        }
    },
    {
        name: 'sandwich',
        options: {
            slices_of_bread: 0, 
        }
    }
]

function PizzaInputs({ handleChangeValues, formValues }) {
    return(
        <>
            <InputLabel id='no_of_slices-label' required >number of slices</InputLabel>
            <Input 
                id='no_of_slices'
                name='no_of_slices'
                labelid='no_of_slices-label'
                value={formValues.no_of_slices}
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
                value={formValues.diameter}
                type='number' 
                variant='outlined'  
                inputProps={{step: '0.1'}}
                onChange={handleChangeValues}
                required
            />
        </>
    )
}

function SoupInputs({ handleChangeValues, formValues }) {
    return(
        <>
            <InputLabel id='spiciness_scale-label' required >spiciness scale</InputLabel>
            <Input 
                id='spiciness_scale'
                name='spiciness_scale'
                labelid='spiciness_scale-label'
                value={formValues.spiciness_scale}
                type='number' 
                variant='outlined' 
                inputProps={{step: '0', min: '1', max: '8'}}
                onChange={handleChangeValues}
            />
        </>
    )
}

function SandwichInputs({ handleChangeValues, formValues }) {
    return(
        <>
            <InputLabel id='slices_of_bread-label' required >slices of bread</InputLabel>
            <Input 
                id='slices_of_bread'
                name='slices_of_bread'
                labelid='slices_of_bread-label'
                value={formValues.slices_of_bread}
                type='number' 
                variant='outlined' 
                onChange={handleChangeValues}
            />
        </>
    )
}

const SubTypeInput = props => {
    const {name, formValues, handleChangeValues } = props
    const classes = useStyles()

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
        <FormGroup className={classes.formControl} required>
        { 
            inputs
        }
        </FormGroup>
    )
}

export default function Form() {
    const classes = useStyles()
    // useState for every input value
    const [formValues, setFormValues] = useState({
        name: '',
        time: '',
        dishType: '',
        no_of_slices: 0,
        diameter: 0,
        spiciness_scale: 1,
        slices_of_bread: 0
    })

    const handleChangeValues = e =>{
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    return (
        <div className={classes.root}>
            <form className={classes.form} >
                <TextField id="standard-basic" name='name' label="Name" 
                    onChange={handleChangeValues} required
                />
                
                <TimeField
                    showSeconds
                    value={formValues.time} 
                    onChange={handleChangeValues} name='time' required
                    input={<TextField label="Preparation time" value={formValues.time} variant="outlined" required />}
                />    

                <FormControl className={classes.formControl} required>
                    <InputLabel id='dishType-label'>Dish type</InputLabel>
                    <Select
                        labelId='dishType-label'
                        id='dishType'
                        name='dishType'
                        value={`${formValues.dishType}`}
                        onChange={handleChangeValues} 
                    >
                        {dishTypesData && dishTypesData.map((item, index) => {
                            return(
                                <MenuItem value={`${item.name}`}
                                    key={`${item}_${index}`}
                                >
                                    {item.name}
                                </MenuItem>
                            )})}
                    </Select>
                </FormControl>

                {formValues.dishType ? 
                    <SubTypeInput 
                        name={formValues.dishType} 
                        formValues={formValues} 
                        handleChangeValues={handleChangeValues}
                        /> 
                : 
                    null}

                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Send
                </Button>
            </form>
        </div>
    )
}
