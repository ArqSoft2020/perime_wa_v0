
import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery} from "@apollo/react-hooks";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SimpleMap from '../map/SimpleMap';


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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    maxWidth: 360,
    marginLeft:'5%',
    backgroundColor: theme.palette.background.paper, 
    marginBottom: "1%",       
    },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));
    
function Prueba (){
    const classes = useStyles();
    const { loading, error, data } = useQuery(PublicationsQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( press f to respect</p>;
  
    return data.publications.map(({_id, title, description, contact_information, stock, expiration_date, price, categories}) => (      
        <div className={classes.root} key={_id}>       
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
            {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              $ {price}              
            </Typography>
          </Grid>          
        </Grid>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>      
        <Typography gutterBottom variant="body1">
          Vencimiento: {expiration_date}
        </Typography>   
        <Typography gutterBottom variant="body1">
        {description}
        </Typography>      
        <Typography gutterBottom variant="body1">
        Stock: {stock}
        </Typography> 
        <Typography gutterBottom variant="body1">
        Contacto: {contact_information}
        </Typography>   
        <Divider variant="middle" />           
          <Typography color="textSecondary" variant="body2">
            <div>
             {categories.map(categoria => <Chip className={classes.chip} label={categoria}/>)}
            </div>          
        </Typography>
        
      </div>
      <div className={classes.section3}>
        <Button color="primary">Ver publicacion</Button>
      </div>
    </div>       
    ));
}

function Scroll (){
  const divStyle={
    overflowY: 'scroll',
    border:'1px solid red',
    width:'100%',
    float: 'left',
    maxHeight:'850px',
    position:'relative'
  };

  return(
    <div style={divStyle}>
    <Prueba/>
    </div>    
  )
}
export const GetPublications = () => (
  <div>    
    <Grid container>
          <Grid xs={6} sm={3} container direction="column">
          <Scroll/>
          </Grid>
          <Grid xs={12} sm={9}> 
          <SimpleMap/>          
          </Grid>
        </Grid>
  </div>
);
export default GetPublications;