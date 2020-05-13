import React, { Component } from 'react';
import GetPublication from './GetPublication';
import{
  TextField,
  Grid,
  InputAdornment
}  from '@material-ui/core/' ;

import DataPickers from "./form/DataPickers"

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
      price : '1000',
      email : '',
      password : ''
   
    }

  }

  // handleDateChange = (date) => {
  //   this.setSelectedDate(date);
  // };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  aumentar = () => {
       this.setState({
          contador: this.state.contador + 1 
       })
  }

  changePrice = (newTitle) => {
    this.setState({title:newTitle});
  }
  render(){
    return (
      <form>
        <GetPublication/>
      <Typography variant="h4" gutterBottom>
        Nueva Publicación  {this.state.price}
      </Typography>




        <TextField
          id="description"
          label="Descripción de la publicación"
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

      <Grid container justify="space-around">
        <FormControl   variant="outlined">
          <InputLabel htmlFor="price">Precio</InputLabel>
          <OutlinedInput
            id="price"
            /* Cuando se traigan los datos de losPrecios.com se debe usar value */
            value={values.price}
            onChange={handleChange('price')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
      </Grid>

     


      </form>

      
    );
  }

}


export default PublicationForm;
