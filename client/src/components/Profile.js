import React, { useState } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './Header'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import avatar from '../assets/avatar.png'
import badge from '../assets/badge.jpg'
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { connect } from "react-redux"
import { newUser } from "../actions/new_user";
import Alert from '@material-ui/lab/Alert'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootCard1: {
    width: 300,
    margin: "auto"
  },
  rootCard2: {
    width: 800,
    marginBottom:15
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  badgePic: {
      width:200
  },
  multilineColor:{
    color:'black'
}
 
}));

const Profile = ( props ) =>  {
    const classes = useStyles();
    const [isEditIn, setIsEditIn] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const axios = require('axios').default;
  

    const userData = data => {
      props.newUser( data );
    }
      
    const _toggleIsEditIn = () => setIsEditIn(!isEditIn);

    const [updatedUser, setUpdatedUser] = useState({
      _id:props.user.user._id,
      name : "",
      email: "",
      password: ""
    }); 

    const handleChange = (e) => {
      const {id , value} = e.target   
      setUpdatedUser(prevState => ({
          ...prevState,
          [id] : value
      }))
    }

    console.log(updatedUser);

    const handleSubmitClick = (e) => {
        e.preventDefault();

        const payload = {
            "name":updatedUser.name,
            "email":updatedUser.email,
            "password":updatedUser.password,
        }
        userData(updatedUser)
        axios.put(`/users/update/${props.user.user._id}`, payload)
        .then(function (response) {
          console.log(response)
        if (response.status == 200){
          setIsSaved(true); 
        }
      })
      }

  return (
    <>
        <MenuAppBar />
        <div className={classes.paper}>
                <h1>Account</h1>
        </div>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                <Card className={classes.rootCard1}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="300"
                            image={avatar}
                            title="Avatar Icon"
                        />
                        <Typography variant="h3" component="h2" >
                        {props.user.user.name}
                        </Typography>
                        <Typography variant="h6" component="h2">
                        {props.user.user.email}
                        </Typography>
                        <Typography variant="h6" component="p">
                        Test Taken: 
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card className={classes.rootCard2}>
                        <CardContent>
                            <Typography variant="h3" component="h2">
                            Information
                            </Typography>
                            <Link href="#" onClick={_toggleIsEditIn}>
                                Edit
                            </Link>
                            <form className={classes.form} noValidate>
                                {isEditIn ? <TextField margin="normal" fullWidth id="name" label="Name" name="name" required
                                defaultValue= {props.user.user.name} autoComplete="name" autoFocus onChange={handleChange}/> :<TextField margin="normal" disabled fullWidth id="name" label="Name" name="name"
                                defaultValue= {props.user.user.name} autoComplete="name" required autoFocus />}

                                {isEditIn ? <TextField margin="normal" required fullWidth id="email" label="Email" name="email"
                                defaultValue= {props.user.user.email} autoComplete="email" autoFocus onChange={handleChange}/> :<TextField margin="normal" disabled fullWidth id="email" label="Email" name="email"
                                defaultValue= {props.user.user.email} required autoComplete="email" autoFocus />}

                                {isEditIn ? <TextField required margin="normal" fullWidth id="password" label="Password" name="password" type="password"
                                autoComplete="password" onChange={handleChange} autoFocus /> : <TextField margin="normal" disabled fullWidth id="password" label="Password" 
                                name="password" type="password" required  autoComplete="password" autoFocus />}

                                {isEditIn ? <Button type="submit" className={classes.submit}  onClick={handleSubmitClick}
                                 variant="contained" color="secondary">Save</Button> : ""}

                            </form>
                            {isEditIn ?  isSaved ? <Alert severity="error">User Updated</Alert> : "" : ""}
                             
                        </CardContent>
                    </Card>
                    <Card className={classes.rootCard2}>
                        <CardContent>
                            <Typography variant="h3" component="h2">
                            Badges
                            </Typography>
                            <Grid className={classes.badgePic}>
                                <CardMedia
                                component="img"
                                height="300"
                                image={badge}
                                title="Badge Icon"
                                />
                            </Grid>
                        </CardContent>
                    </Card>               
                </Grid>
            </Grid>
        </div>
    </>
  );
}
// export default Profile;


const mapStateToProps = ( state, ownProps) => {
    return {
      user: state.user
    }
}

const mapDispatchToProps = ( dispatch ) => {
  return{
    newUser: ( payload ) => {
      dispatch(newUser( payload ))
    }
  }
};

export default connect( mapStateToProps, mapDispatchToProps )( Profile );