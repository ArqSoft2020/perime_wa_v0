import React, { Component } from 'react';
import GetPublication from './GetPublication';
import{
  TextField,
  Grid,
  InputAdornment
}  from '@material-ui/core/' ;

import DataPickers from "./form/DataPickers"
import Price from "./form/Price"

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

import Typography from '@material-ui/core/Typography';


import PhoneIcon from '@material-ui/icons/Phone';
class PublicationForm extends Component{

  
  constructor(props){

    super(props);
    
    this.state = {
      email : '',
      password : ''
   
    }

  }

  handleDateChange = (date) => {
    this.setSelectedDate(date);
  };

  aumentar = () => {
       this.setState({
          contador: this.state.contador + 1 
       })
  }

  render(){
    return (
      <form>
        <GetPublication/>
      <Typography variant="h4" gutterBottom>
        Nueva Publicación
      </Typography>
      <TextField
          id="title"
          label="Titulo de Publicación"
          style={{ margin: 8 }}
          placeholder="Inserta el titulo de tu publicación"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="description"
          label="Descripción de la publicación"
          Descripción de la publicación
          multiline
          fullWidth
          rows={4}
          rowsMax={8}
          variant="outlined"
          // value={value}
          // onChange={handleChange}
        />
        
        {/* Falta el switch para estado de publicación */}
        <Grid container justify="space-around">
        <TextField
        id="contact_information"
        label="Número de Contacto"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />

        </Grid>
        
      
      {/* falta stock  en kg y validar solo numeros*/}


      <DataPickers />
      <Price />


      </form>

      
    );
  }

}


export default PublicationForm;
