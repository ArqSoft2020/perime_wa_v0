import React, { Component } from "react";

import SimpleMap from "./map/SimpleMap";

import Grid from "@material-ui/core/Grid";

import PublicationForm from "./publication/PublicationForm";


import GetPublications  from  "./publication/GetPublications";

class PublicationView extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid xs={6} sm={3} container direction="column">
            <GetPublications/>
            hello
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
