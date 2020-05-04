import React, { Component } from 'react';

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
      <p> Crear publicación</p>
        <input></input>
        <input></input>
        <div>
          <input></input>
        </div>
      </form>

      
    );
  }

}


export default PublicationForm;
