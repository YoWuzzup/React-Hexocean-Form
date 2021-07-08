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

export default function Form() {
    const classes = useStyles()
    // useState for every input value
    const [formValues, setFormValues] = useState({
        name: '',
        time: '',
        dishType: '',
    })

    const handleChangeValues = e =>{
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
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
