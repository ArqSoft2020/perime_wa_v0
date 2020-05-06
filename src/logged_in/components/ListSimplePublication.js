import React from 'react';
import SimplePublication from './publication/SimplePublication';
import {Grid} from '@material-ui/core';
import SimpleMap from "./map/SimpleMap"

function ListSimplePublication(){
    return (
        <Grid container spacing = {5}>
            <Grid item xs={6} sm={3}>
                <SimplePublication />
            </Grid>

            <Grid xs={12} sm={9} >
                <SimpleMap />
            </Grid>
        </Grid>
    )
}

export default ListSimplePublication;
