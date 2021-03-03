import React, { useState } from 'react'
import './Signup.css';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { newUser } from "../actions/new_user";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
  icons: {
    margin: theme.spacing(1)
  }
}));

function Signup(props) {
  const classes = useStyles();
  const axios = require('axios').default;
  const history = useHistory();

  const [user, setUser] = useState({
    name : "",
    email: "",
    password: ""
  }); 
  const [exist, setExist] = useState(false);
  const [validation, setValidation] = useState(false);

  console.log(user);
  console.log(exist);

  const helloUser = data => {
    props.newUser( data );
    console.log("Dispatched to the store")
  }

  const handleChange = (e) => {
    const {id , value} = e.target   
    setUser(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      "name":user.name,
      "email":user.email,
      "password":user.password,
    }
    
    axios.post('/auth/signup', payload)
    .then(function (response) {
      console.log(response)
      if (response.data == "Email Already Exists"){
        setExist(true);
        console.log("Email Already Exists")
      } else if (response.data == "Invalid Input"){
        setValidation(true);
      }
      else {
        console.log(response)
        helloUser( response );
        history.push("/select")
      }
    })
    .catch(function (error) {
      console.log(error);
    });    
    
    helloUser( payload );
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={user.name}
                  onChange={handleChange}
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={handleChange}
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="6+ Characters, 1 UpperCase, 1 number"
                  value={user.password}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmitClick}
                >
                  Create Account
                </Button>
                { exist === true ? <Alert severity="error">Email Already Exist</Alert> : ""}
                { validation === true ? <Alert severity="error">Invalid Input </Alert> : ""}
              <Grid container justify='center' className={classes.icons}>
                <Box m={1} pt={1} >
                  <FontAwesomeIcon icon={faGoogle} size='2x'/>
                  <FontAwesomeIcon icon={faFacebook} size='2x'/>
                  <FontAwesomeIcon icon={faTwitter} size='2x'/>
                </Box>
              </Grid>
              <Grid container justify='center'>
                <Grid item>
                  <Link href="/signin" variant="body1">
                    {"Already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Box>
      </Grid>
    </Grid>
  )
}



// allows us to use pieces of our state as props in our component 
const mapStateToProps = ( state , ownProps) => {
  return{
    users: state.users
  }
};

// biends the dispatch of the store to our actions, that can be passed into our component as props
const mapDispatchToProps = ( dispatch ) => {
  return{
    newUser: ( payload ) => {
      dispatch(newUser( payload ))
    }
  }
};

export default connect( mapStateToProps, mapDispatchToProps )( Signup );
// export default Signup
