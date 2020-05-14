import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneIcon from '@material-ui/icons/Phone';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';


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

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: "52%",
    padding: '0 30px',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },

}));

  export default function  SimpleUser() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !data.getUser.passhash_user});
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
  const id = 1;

  const { loading, error, data,  networkStatus } = useQuery(
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
    <div className={classes.root} noValidate autoComplete="off">
        <div>
        <CardMedia
          component="img"
          alt="Image url"
          height="60%"
          image="https://material-ui.com/static/images/avatar/2.jpg"
          title="User"
        />          
        <Button
        font-size="10%"
        >{data.getUser.username_user} </Button>
        </div>        
        <div>
        
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>        
          <Input
            id="standard-adornment-weight"
            value={data.getUser.email_user}
            onChange={handleChange('weight')}
            defaultValue={data.getUser.email_user}
            endAdornment={<InputAdornment position="end"><EmailIcon/></InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={data.getUser.passhash_user ? 'text' : 'password'}
            value={data.getUser.passhash_user}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {data.getUser.passhash_user? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>        

        </div>
        <div>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-amount">Contacto</InputLabel>
          <Input
            id="standard-adornment-contacto"            
            value={data.getUser.cellphone_user}
            onChange={handleChange('contacto')}
            endAdornment={
              <InputAdornment position="start">
                  <PhoneIcon/>
              </InputAdornment>
            }
          />
        </FormControl>   
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-amount">Direccion</InputLabel>
          <Input
            id="standard-adornment-direccion"            
            value={data.getUser.address_user}
            onChange={handleChange('direccion')}
            endAdornment={
              <InputAdornment position="start">
                  <RoomIcon/>
              </InputAdornment>
            }
          />
        </FormControl>   
        </div>
      </div>
  );
}

