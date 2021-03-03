import React, { useState } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './Header'
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import avatar from '../assets/avatar.png'
// import badge from '../assets/badge.jpg'
// import firstbadge from '../assets/firstbadge.png'
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { connect } from "react-redux"
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootCard1: {
    width: 300,
    margin: "auto"
  },
  rootCard2: {
    flexDirection: "row",
    width: 800,
    marginBottom:15,
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
},
titles: {
  fontSize: 50,
  backgroundColor: "red",
},
listimages: {
  width: 500,
  height: 450,
},
icon: {
  color: 'rgba(255, 255, 255, 0.54)',
},

 
}));

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
];

const Profile = ( props ) =>  {
    const classes = useStyles();
    const [isEditIn, setIsEditIn] = useState(false);
    const axios = require('axios').default;
  
    const _toggleIsEditIn = () => setIsEditIn(!isEditIn);

 
  return (
    <div>
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
                    </Grid>

                    </Grid>

</div>
      <ImageList className={classes.listimages}>  

      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
                ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                aria-label={`info about ${item.title}`}
                className={classes.icon}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
     </ImageList>
    </div> 
     )      
            
 
};  
               



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