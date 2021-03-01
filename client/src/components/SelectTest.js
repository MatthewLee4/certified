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
import historyLogo from "../assets/history.jpg"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    rootCard: {
        width: 300,
        textAlign:'center',
        padding: theme.spacing(2),
        margin: "auto"
    },
    paper: {        
        textAlign: 'center',
    }
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
                <h1>Welcolme Friend</h1>
                <Typography component="h1" variant="h5">
                    Select a Category
                </Typography>
            </div>

            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '80vh' }}>
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
        </>
    )
};

export default SelectTest;
