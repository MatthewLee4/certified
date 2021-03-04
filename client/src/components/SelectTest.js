import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MenuAppBar from './Header'
import sportsLogo from "../assets/noun_Sports_1843319.svg"
import politicsLogo from "../assets/noun_political_3091499.svg"
import historyLogo from "../assets/noun_History_3718795.svg"
import { useHistory } from "react-router-dom"
import Link from '@material-ui/core/Link';
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux"
import { userTest } from "../actions/user-test"

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
const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
      
    },
    rootCard: { // category card inner
        maxWidth: 400,
        textAlign:'center',
        padding: theme.spacing(2),
        margin: "auto",
        backgroundColor: '#12263a',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        borderRadius: 30,
        //#0da39f
        
        
    },
    paper: { // Title and caption
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 35,
        color: '#12263a',
        padding: 1,
        // backgroundColor: "#f4edea",  
    },

form: { // background of inner category tile
    paddingTop: 5,
    paddingBottom: 5,
    
},
footer: {
    backgroundColor: 'theme.palette.background.paper',
    padding: theme.spacing(6),
  },
  gridcont: { // background tiles sit on
    display: 'flex',
    margin: 'auto',
    maxWidth: 1750,
  }

  }));

const SelectTest = (props) => {
    const classes = useStyles();
    const [category, setCategory] = useState();
    const history = useHistory();

    const test = (data) => {
        props.userTest(data);
        console.log(data)
    }

    const handleSubmitClickSport = (e) => {
        e.preventDefault();
        test("21");
        // setCategory("21")      
        history.push("/Test")

        
    }   
    const handleSubmitClickPolitics = (e) => {
        e.preventDefault();
        // setCategory("24")
        test("24");
        history.push("/Test")
        
    }   
    const handleSubmitClickHistory = (e) => {
        e.preventDefault();
        // setCategory("23")
        test("23");
        history.push("/Test")
        
    }  
    console.log(category);

    return (
        <>
            <MenuAppBar /> 

            <div className={classes.paper}>
                <h1>Welcome {props.user.user.name} !</h1>
                <h4> 
                    Select a Category
                </h4>
            </div>

            <Grid className={classes.gridcont}
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center">
                <Grid container item xs={12} spacing={5}>
                    <Grid item xs={4}>
                        <form className={classes.form} noValidate>
                            <Card className={classes.rootCard}>                            
                                <CardActionArea onClick={handleSubmitClickSport}  type="submit">
                                    <CardMedia
                                        height="300"
                                        component="img"
                                        image={sportsLogo}
                                        title="Sports Icon"
                                    />
                                    <CardContent>
                                        <WhiteTextTypography gutterBottom variant="h5" component="h2">
                                            Sports
                                        </WhiteTextTypography>
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
                                        <WhiteTextTypography gutterBottom variant="h5" component="h2">
                                            Politics
                                        </WhiteTextTypography>
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
                                        <WhiteTextTypography gutterBottom variant="h5" component="h2">
                                            History
                                        </WhiteTextTypography>
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

// allows us to use pieces of our state as props in our component 
const mapStateToProps = ( state , ownProps) => {
    return{
        user: state.user
    }
};

const mapDispatchToProps = ( dispatch ) => {
    
    return{
        userTest : ( payload ) => {
            dispatch( userTest( payload ) )
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( SelectTest );




// export default SelectTest;
