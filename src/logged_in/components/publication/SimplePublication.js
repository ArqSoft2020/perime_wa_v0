import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Users from '../user/users'

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
});

export default function SimplePublication() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Users/>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Image url"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Publication"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            title_publication
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            state_publication
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            description_publication
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            contact_information_publication
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            expiration_publication
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            price_publication
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            categories_publication[]
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}