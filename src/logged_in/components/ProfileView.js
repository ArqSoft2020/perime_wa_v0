import React, { Component, Fragment } from 'react';

import SimpleMap from "./map/SimpleMap"

import Grid from '@material-ui/core/Grid'

import SimpleUser from "./user/SimpleUser";

class ProfileView extends Component {
    render () {
        return (
        <div>
            <Grid container >
                <Grid xs={6} sm={3}
                    container
                    direction="column"
                >
                    <SimpleUser />
                </Grid>
                <Grid xs={12} sm={9} >
                    <SimpleMap />
                </Grid>
             </Grid>
        </div>
        )
    }
};

export default ProfileView;