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
          height="180"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="User"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h6">
            <p>
                {data.getUser.username_user}! 
            </p>
          </Typography>

          <Typography gutterBottom variant="h6" component="h6">
            <p>
                So you came here looking for your personal information... Let's go! 
            </p>
          </Typography>

          <Typography variant="body1" color="textSecondary" component="p">
            <p>
                {data.getUser.email_user}
            </p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>
                {data.getUser.address_user}
            </p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p>
                {data.getUser.cellphone_user}
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