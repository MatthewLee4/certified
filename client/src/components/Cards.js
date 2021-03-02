import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Card = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
    <Grid container justify="center" className={classes.icons}>
      <Box m={1} pt={1}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              container
              justify="center"
              color="textSecondary"
              gutterBottom
            >
              {props.question}
            </Typography>
            <Typography variant="h5" component="h2">
              {bull} {props.answer}
            </Typography>
            <Typography variant="h5" component="h2">
              {bull} {props.answer}
            </Typography>
            <Typography variant="h5" component="h2">
              {bull} {props.answer}
            </Typography>
            <Typography variant="h5" component="h2">
              {bull} {props.answer}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">Submit</Button>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}

export default Cards
