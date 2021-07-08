import React, { useState } from 'react'
import { SubTypeInput } from './Components'
import { dishTypesData } from './data'
import { TextField, FormControl, Select, MenuItem, InputLabel, Button } 
    from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TimeField from 'react-simple-timefield'
import * as api from './api'

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

function contains(target, pattern){
    var value = 0;
    pattern.forEach(function(word){
      value = value + target.includes(word);
    });
    return (value === 1)
}

export default function Form() {
    const classes = useStyles()
    // useState for every input value
    const [formValues, setFormValues] = useState({
        name: '',
        preparation_time: '',
        type: '',
    })

    const handleChangeValues = e =>{
        const name = e.target.name
        const namesToCheck = ['no_of_slices', 'diameter', 'slices_of_bread', 'spiciness_scale']
        
        contains(name, namesToCheck) ?
            setFormValues({ ...formValues, [e.target.name]: Number(e.target.value)})
        :
            setFormValues({ ...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()

        api.postData(formValues)
    }

    return (
        <div className={classes.root}>
            <form className={classes.form} 
                onSubmit={handleSubmit}
            >
                <TextField id="standard-basic" name='name' label="Name" 
                    onChange={handleChangeValues} required
                />
                
                <TimeField
                    showSeconds
                    value={formValues.preparation_time} 
                    onChange={handleChangeValues} name='preparation_time' required
                    input={<TextField label="Preparation time" value={formValues.preparation_time} variant="outlined" required />}
                />    

                <FormControl className={classes.formControl} required>
                    <InputLabel id='type-label'>Dish type</InputLabel>
                    <Select
                        labelId='type-label'
                        id='type'
                        name='type'
                        value={`${formValues.type}`}
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

                {formValues.type ? 
                    <SubTypeInput 
                        name={formValues.type} 
                        formValues={formValues} 
                        handleChangeValues={handleChangeValues}
                        /> 
                : 
                    null
                }

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
