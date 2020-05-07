import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Users from '../user/users'

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_USER_QUERY = gql`
query usurio($id: ID){
  getUser(id : $id){
    id_user
    username_user
    passhash_user
    address_user
    cellphone_user
    email_user 
  }
}
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    maxHeight: 1800,
  },
});

function SimpleUser() {
  const classes = useStyles();
  const id = 1;

  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_USER_QUERY,
    {
      variables: { id },
      notifyOnNetworkStatusChange: true
      // pollInterval: 500
    }
  );

  if (networkStatus === 4) return "Refetching!";
  if (loading) return null;
  if (error) return `Error!: ${error}`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Image url"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="User"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h6">
            <p>
                Hello {data.getUser.username_user}! 
            </p>
          </Typography>

          <Typography variant="h6" component="h6">
            <p>
                Let's see what we have in here...! 
            </p>
          </Typography>

          <Typography variant="body1" color="textSecondary" component="p">
            <p>
                For your login {data.getUser.email_user}...
            </p>
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <p>
                Where they will pick up the product {data.getUser.address_user}...
            </p>
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            <p>
                Here people will contact you {data.getUser.cellphone_user}
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          UPDATE 
        </Button>
      </CardActions>
    </Card>
  );
}

export default SimpleUser;