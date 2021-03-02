import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuAppBar from './Header'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Contact from './Contact';

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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: { // title and header bkgd
  
    padding: theme.spacing(8, 0, 6),
    fontFamily: 'marker felt',
    fontSize: 35,
    color: '#12263a',
    paddingTop: 10,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "#f4edea",
  },
  card: { // card tiles 
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4d1ae',
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardTeamMember: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: { // text inside of card tiles
    flexGrow: 1,
    fontFamily: 'lato',
    fontSize: 12,
    color: '#12263a'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  caption: { // title caption
    fontFamily: 'lato',
    fontSize: 24,
  },
  buttonlinks: {
    margin: 'auto',
  }

}));

// const cards = [1, 2, 3, 4, 5];

export default function Album() {
  const classes = useStyles();

  return (
    <>
    <MenuAppBar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <h1 align="center" color="#12263a">
              About Us
            </h1>
            <div className={classes.caption} align="center" color="#12263a">
            An efficient development team is mostly self-managed and delivers valuable software on time. Hence, the team’s efficiency is the main success. The Certifed team was tailor-built to be the pinnacle of performance. Here's a little bit about us.
            </div>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={1} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
              <Grid item key={1} xs={12} sm={6} md={4}> 
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardTeamMember}
                    image="https://avatars2.githubusercontent.com/u/49094220?s=400&u=ba5f04fcf88eb878a70c0342589927c02802e19f&v=4"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Oshea Deans
                      </Typography>
                      <h2>
                      This is a media card. You can use this section to describe the content.
                    </h2>
                  </CardContent>
                  <CardActions className={classes.buttonlinks}>
                  <Button target="_blank" href="https://github.com/OsheaRD" size="small" color="dark">
                    <GitHubIcon />
                    </Button>
                    <Button target="_blank" href="https://linkedin.com/in/osheadeans/" size="small" color="dark">
                    <LinkedInIcon />
                    </Button>
                    <Button target="_blank" href="https://scrumptioustech.com/" size="small" color="dark">
                    <MailOutlineIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={2} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardTeamMember}
                    image="https://avatars.githubusercontent.com/u/69873929?s=400&u=b34d0afe9e5b83bb4742c82a5ed9623050d9a1bd&v=4"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Barbara Pincela
                    </Typography>
                    <h2>
                      This is a media card. You can use this section to describe the content.
                    </h2>
                  </CardContent>
                  <CardActions className={classes.buttonlinks}>
                  <Button target="_blank" href="https://github.com/bpincelamattos" size="small" color="dark">
                    <GitHubIcon />
                    </Button>
                    <Button target="_blank" href="https://www.linkedin.com/in/bpincela/" size="small" color="dark">
                    <LinkedInIcon />
                    </Button>
                    <Button target="_blank" href="" size="small" color="dark">
                    <MailOutlineIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid> 
              <Grid item key={3} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardTeamMember}
                    image="https://ca.slack-edge.com/T0569RDC6-U017DJA5658-9f69d4e85c12-512"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Joseph Epherson
                    </Typography>
                    <h2>
                      This is a media card. You can use this section to describe the content.
                    </h2>
                  </CardContent>
                  <CardActions className={classes.buttonlinks}>
                  <Button target="_blank" href="https://github.com/Joe-dev13" size="small" color="dark">
                    <GitHubIcon />
                    </Button>
                    <Button target="_blank" href="https://www.linkedin.com/in/joseph-epherson-84a1571b4/" size="small" color="dark">
                    <LinkedInIcon />
                    </Button>
                    <Button target="_blank" href="" size="small" color="dark">
                    <MailOutlineIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid> 
              <Grid item key={4} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardTeamMember}
                    image="https://ca.slack-edge.com/T0569RDC6-U0176S84VPG-7950d8c81d26-512"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Matthew Lee
                    </Typography>
                    <h2>
                      This is a media card. You can use this section to describe the content.
                    </h2>
                  </CardContent>
                  <CardActions className={classes.buttonlinks}>
                  <Button target="_blank" href="https://github.com/MatthewLee4" size="small" color="dark">
                    <GitHubIcon />
                    </Button>
                    <Button target="_blank" href="https://www.linkedin.com/in/matthew-lee-174b491b6/" size="small" color="dark">
                    <LinkedInIcon />
                    </Button>
                    <Button target="_blank" href="" size="small" color="dark">
                    <MailOutlineIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid> 
              <Grid item key={5} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardTeamMember}
                    image="https://cbsnews3.cbsistatic.com/hub/i/r/2014/12/12/f85d18dd-1899-4c70-849c-56a63c7445ad/thumbnail/1200x630/22d5cc20c664d13e2626eb3c3edc5560/nostradamus-1765-engraving-promo.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Andre Davis
                    </Typography>
                    <h2>
                      This is a media card. You can use this section to describe the content.
                    </h2>
                  </CardContent>
                  <CardActions className={classes.buttonlinks}>
                  <Button target="_blank" href="https://github.com/nastrodamous" size="small" color="dark">
                    <GitHubIcon />
                    </Button>
                    <Button target="_blank" href="https://www.linkedin.com/in/andrejdavis24/" size="small" color="dark">
                    <LinkedInIcon />
                    </Button>
                    <Button target="_blank" href="" size="small" color="dark">
                    <MailOutlineIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid> 


          </Grid>
          
        </Container>
      </main>
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
  );
}

