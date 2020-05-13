import React, { Component } from "react";

import SimpleMap from "./map/SimpleMap";

import Grid from "@material-ui/core/Grid";

// import SimpleForm from "./publication/SimpleForm";
import SimpleForm from "./publication/SimpleForm"








class PublicationView extends Component {

 


  

 state = {
    fields: { "vaca":"blue" }   
};




  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  onSubmit = fields => {
    
    console.log("formed", fields);
  };
  


  render() {
    return (
      <div>
        <Grid container>
          <Grid xs={6} sm={3} container direction="column">

            <SimpleForm
              onChange={fields => this.onChange(fields)}
              onSubmit={fields => this.onSubmit(fields)}
            />
            <p>{JSON.stringify(this.state.fields, null, 2)}</p>


          </Grid>
          <Grid xs={12} sm={9}>
            <SimpleMap />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PublicationView;
