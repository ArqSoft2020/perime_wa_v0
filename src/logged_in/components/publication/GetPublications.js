
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



const PublicationsQuery = gql`
  {
    publications
    {
      _id
      title
      description
      state_publication
      contact_information
      id_image
      stock
      expiration_date
      price
      categories
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
    const { loading, error, data } = useQuery(PublicationsQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( press f to respect</p>;
  
    return data.publications.map(({_id, title, description, contact_information, stock, expiration_date, price, categories}) => (
      <div key={_id}>
          <Card className={classes.root}>
            <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {title} 
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {description}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                        Phone: {contact_information}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                         Stock: {stock}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                         Fecha de vencimiento: {expiration_date}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                         Precio: {price}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        
                         Categorias: {categories}
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