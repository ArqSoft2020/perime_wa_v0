import React, { Component } from 'react';

import PublicationForm from "./publication/PublicationForm";
import SimpleMap from "./map/SimpleMap"

import Grid from '@material-ui/core/Grid'


class PublicationView extends Component {
    render () {
        return (
        <div>
            <Grid container >
                <Grid xs={6} sm={3}>
                    <PublicationForm />
                </Grid>
                <Grid xs={12} sm={9} >
                    <SimpleMap />
                </Grid>
             </Grid>
        </div>
        )
    }
};

export default PublicationView;