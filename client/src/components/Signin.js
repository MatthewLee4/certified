import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert'
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import{ connect } from "react-redux";
import { newUser } from "../actions/new_user";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://i.ibb.co/kgVMy4v/signinlogofixed.png)',
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
}));

function SignInSide(props) {
  const classes = useStyles();
  const axios = require('axios').default;
  const history = useHistory();

  const userData = data => {
    props.newUser( data );
  }

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  }); 
  const [error, setError] = useState(false);
  
  console.log(userLogin);

  const handleChange = (e) => {
    const {id , value} = e.target   
    setUserLogin(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      "email":userLogin.email,
      "password":userLogin.password,
    }

    axios.post('/auth/signin', payload)
    .then(function (response) {
      console.log(response)
      if (response.data == "Wrong Email or Password"){
        setError(true);
      }
      else {
        userData(response.data[0])
        props.setIsLoggedIn(true);
        history.push("/select")
      }
    })
    .catch(function (error) {
      console.log(error);
    });    
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={userLogin.email}
              onChange={handleChange}
              
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
              value={userLogin.password}
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
              Sign In
            </Button>
            { error === true ? <Alert severity="error">Wrong Email or Password</Alert> : ""}
            <Grid container justify='center'>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Box>
      </Grid>
    </Grid>
  );
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

export default connect( mapStateToProps, mapDispatchToProps )( SignInSide );