import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField'

class PublicationForm extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      email : '',
      password : ''
    }
  }

  aumentar = () => {
       this.setState({
          contador: this.state.contador + 1 
       })
  }

  render(){
    return (
      <form>
      
      <TextField
          id="standard-full-width"
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
          id="outlined-multiline-static"
          label="Descripción de la publicación"
          placeholder="Realiza una desripción llamativa"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />

      </form>

      
    );
  }

}


export default PublicationForm;