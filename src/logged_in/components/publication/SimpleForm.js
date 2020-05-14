import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import CreatePublication from "./CreatePublication"
export default class Form extends React.Component {  
  state = {
    title: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      title: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      title: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (      
      <div className="
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      ">
       <div >
       <FormControl >        
          <Input
            id="standard-adornment-weight"
            name="title"
            placeholder="First name"
            value={this.state.title}
            onChange={e => this.change(e)} 
            variant="outlined"                     
            endAdornment={<InputAdornment position="end"><PersonIcon/></InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          </FormControl>
      </div>      
        <input
          name="title"
          placeholder="First name"
          value={this.state.title}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        
        <Button color="primary" onClick={e => this.onSubmit(e)}>Ver Submit</Button>     

        <CreatePublication title={this.state.title}/>
      </div>
    );
  }
}