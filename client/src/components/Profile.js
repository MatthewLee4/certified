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
import userIcon from '../assets/usericoncamerasm.png';
// import badge from '../assets/badge.jpg'
// import firstbadge from '../assets/firstbadge.png'
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { connect } from "react-redux"
import GridList from '@material-ui/core/GridList';
import GridListItem from '@material-ui/core/GridListTile';
import GridListItemBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft:210,
  },
  rootCard1: {
    width: 300,
    margin: "auto",
   
  },
  rootCard2: {
    flexDirection: "row",
    width: 800,
    marginBottom:15,
    // margin: "auto"
  },
  rootCard3: {
    flexDirection: "row",
    width: 800,
    marginBottom:15,
   

    // margin: "auto"
  },
  paper: {
    paddingTop: 20,
    paddingBottom: 40,
    textAlign: 'center',
    fontFamily: "marker felt",
    color: "#12263A",
    fontSize: 20
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
  fontFamily: 'lato',
  fontSize: 35,
  color: '#12263a',
  
},
titles2: {
  fontFamily: 'lato',
  fontSize: 35,
  color: '#12263a',
  marginLeft: 20,
  paddingTop: 15,
  
},
listimages: {
  flexDirection: "row",
  width: 800,
  margin: 18,
  // width: 500,
  // height: 450,
},
icon: {
  color: 'rgba(255, 255, 255, 0.54)',
},

 
}));


const itemData = [
  {
    img: "https://i.ibb.co/DgVdqp3/firstbadge.png",
    title: 'CERTIFIED : Sports',
    author: 'March 2, 2021',
  },
  {
    img: 'https://i.ibb.co/MBPy2ds/sportsbadge.png',
    title: 'CERTIFIED : Politics',
    author: 'March 3, 2021',
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
                <h1>Profile and Account Settings</h1>
        </div>

        <div className={classes.root}>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                <Card className={classes.rootCard1}>
                    <CardContent>
                        <CardMedia
                            component="img"
                            height="300"
                            img src={'https://i.ibb.co/Hd25Tpk/usericoncamerasm.png'} 
                            title="Avatar Icon"
                        />
                        <Typography variant="h3" component="h2" >
                        {props.user.user.name}
                        </Typography>
                        <Typography variant="h6" component="h2">
                        {props.user.user.email}
                        </Typography>
                        <Typography variant="h6" component="p">
                        <br></br>
                        Tests Attempted: 
                        <br></br>
                        Sports
                        <br></br>
                        Politics
                        <br></br>
                        History
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>


                <Grid item xs={8}>
                    <Card className={classes.rootCard2}>
                        <CardContent>
                            <div className = {classes.titles}>
                            Information
                            </div>
                            
                            <br></br>

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
                                 variant="contained" color="primary">Save</Button> : ""}
                            </form>
                        </CardContent>
                    </Card>


                    <Card className={classes.rootCard3}>
                    <div className = {classes.titles2}>
                            Badges Earned
                            </div>
                            <br></br>
                            <br></br>
                    <GridList className={classes.listimages}>  

{itemData.map((item) => (
  <GridListItem key={item.img}>
    <img
      srcSet={`${item.img}?w=248&fit=crop&auto=format 1x,
          ${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
      alt={item.title}
    />
    <GridListItemBar
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
  </GridListItem>
))}
</GridList>
                    </Card>               

                    </Grid>

                    </Grid>

</div>
     
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
// };b

export default connect( mapStateToProps, null )( Profile );