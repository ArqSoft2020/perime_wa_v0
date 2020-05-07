
import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery} from "@apollo/react-hooks";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const UsersQuery = gql`
{
    users{
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
      minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  });

    
function Prueba (){
    const classes = useStyles();
    const { loading, error, data } = useQuery(UsersQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( press f to respect</p>;
  
    return data.users.map(({id_user, username_user,  passhash_user, address_user, cellphone_user, email_user}) => (
      <div key={id_user}>
          <Card className={classes.root}>
            <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {username_user} 
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {passhash_user}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                        Direccion: {address_user}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                         Celular: {cellphone_user}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                         Email: {email_user}
                        </Typography>

                    </CardContent>
            </CardActionArea>
        </Card>
      </div>         
    ));
}


export const GetPublications = () => (
  <div>
    <Prueba/>
  </div>
);
export default GetPublications;