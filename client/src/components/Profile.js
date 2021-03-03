import React, { useState } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './Header'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import avatar from '../assets/avatar.png'
import badge from '../assets/badge.jpg'
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { connect } from "react-redux"


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
    // margin: "auto"
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
    const axios = require('axios').default;
  
    const _toggleIsEditIn = () => setIsEditIn(!isEditIn);

    const handleSubmitClick = (e) => {
        e.preventDefault();
        // const payload = {
        //     "name":user.name,
        //     "email":userLogin.email,
        //     "password":userLogin.password,
        // }
    
        // axios.put('/users/update/', payload)
        // .then(function (response) {
        //   console.log(response)
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });    
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
                                {isEditIn ? <TextField margin="normal" fullWidth id="name" label="Name" name="name"
                                defaultValue= {props.user.user.name} autoComplete="name" autoFocus /> :<TextField margin="normal" disabled fullWidth id="name" label="Name" name="name"
                                defaultValue= {props.user.user.name} autoComplete="name" autoFocus />}

                               { isEditIn ? <TextField margin="normal" fullWidth id="email" label="Email" name="email"
                                value= {props.user.user.email} autoComplete="email" autoFocus/> : <TextField margin="normal" disabled fullWidth id="email" label="Email" name="email"
                                value= {props.user.user.email} autoComplete="email" autoFocus/>}

                                {/* {isEditIn ? <TextField margin="normal" fullWidth id="password" label="Password" name="password"
                                value="props.user.password" autoComplete="password" autoFocus /> : <TextField margin="normal" disabled fullWidth id="password" label="Password" name="password"
                                value="props.user.password" autoComplete="password" autoFocus />} */}

                                {isEditIn ? <Button type="submit" className={classes.submit}
                                 variant="contained" color="secondary">Save</Button> : ""}
                            </form>
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

// const mapDispatchToProps = ( dispatch ) => {
//   return{
//     newUser: ( payload ) => {
//       dispatch(newUser( payload ))
//     }
//   }
// };

export default connect( mapStateToProps, null )( Profile );