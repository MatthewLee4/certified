import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MenuAppBar from './Header'
import sportsLogo from "../assets/sports.png"
import politicsLogo from "../assets/politics.png"
import historyLogo from "../assets/history.png"
import { useHistory } from "react-router-dom"
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </>
    );
  }

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    rootCard: { // category card inner
        width: 300,
        textAlign:'center',
        padding: theme.spacing(2),
        margin: "auto",
        backgroundColor: "#f4d1ae",
        
        
    },
    paper: { // Title and caption
        textAlign: 'center',
        fontFamily: 'marker felt',
        fontSize: 35,
        color: '#12263a',
        paddingTop: 10,
       
        
    },

form: { // background of inner category tile
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#12263a',
    
},
footer: {
    backgroundColor: 'theme.palette.background.paper',
    padding: theme.spacing(6),
  },

  }));

const SelectTest = () => {
    const classes = useStyles();
    const [category, setCategory] = useState();
    const history = useHistory();

    const handleSubmitClickSport = (e) => {
        e.preventDefault();
        setCategory("21")      
        history.push("/Test")

        
    }   
    const handleSubmitClickPolitics = (e) => {
        e.preventDefault();
        setCategory("24")
        history.push("/Test")
        
    }   
    const handleSubmitClickHistory = (e) => {
        e.preventDefault();
        setCategory("23")
        history.push("/Test")
        
    }  
    console.log(category);

    return (
        <>
            <MenuAppBar /> 

            <div className={classes.paper}>
                <h1>Welcome Friends !</h1>
                <h4> 
                    Select a Category
                </h4>
            </div>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '60vh' }}>
                <Grid container item xs={12} spacing={5}>
                    <Grid item xs={4}>
                        <form className={classes.form} noValidate>
                            <Card className={classes.rootCard}>                            
                                <CardActionArea onClick={handleSubmitClickSport}  type="submit">
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={sportsLogo}
                                        title="Sports Icon"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Sports
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>                               
                            </Card>
                        </form>
                    </Grid>
                    <Grid item xs={4}>
                        <form className={classes.form} noValidate>
                            <Card className={classes.rootCard}>
                                <CardActionArea onClick={handleSubmitClickPolitics} type="submit">
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={politicsLogo}
                                        title="Politics Icon"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Politics
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </form>
                    </Grid>
                    <Grid item xs={4}>
                        <form className={classes.form} noValidate>
                            <Card className={classes.rootCard}>
                                <CardActionArea onClick={handleSubmitClickHistory} type="submit">
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={historyLogo}
                                        title="History Icon"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            History
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </form>
                    </Grid>
                </Grid>
            </Grid>             

{/* Footer */}
<footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
         Created with care by the Certified team!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}

        </>
    )
};

export default SelectTest;
