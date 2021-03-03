import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import logo from "../assets/logo.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#12263A"
  },
  menuButton: {
    marginRight: theme.spacing(1),
    alignItems: "flex-end"
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    alignItems: "flex-end",
    paddingLeft: "50%",
    justifyContent: "evenly",
    flex: 1,
  },
  buttons: {
    display: "flex",
    backgroundColor: "#F4D1AE",
    justifyContent: "space-evenly",
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'Bradley Hand',
    fontSize: 20,

  },
  logo: {
    maxWidth: 100,
    paddingBottom: 5
  },
  title: {
    fontFamily: 'Bradley Hand',
    fontSize: 35,
  }

}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const axios = require('axios').default;

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const handleSubmitClick = (e) => {
    axios.get('/auth/logout')
    .then(function (response) {
      if (response.data == "Logout"){
        history.push("/signin")
      }
    })
    .catch(function (error) {
      console.log(error);
    });    
  }

  const menuItems = [
    {
      menuTitle: "Profile",
      pageURL: "/profile"
    },
    {
      menuTitle: "About",
      pageURL: "/about"
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact"
    },
    {
      menuTitle: "Logout",
      pageURL: "/signin"
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} onClick={() => handleButtonClick("/select")} />
          <h1 className={classes.title} onClick={() => handleButtonClick("/select")}>
            Certified
          </h1>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button className={classes.buttons}
                variant="contained"
                onClick={() => handleButtonClick("/profile")}
              >
                PROFILE
              </Button>
              <Button className={classes.buttons}
                variant="contained"
                onClick={() => handleButtonClick("/about")}
              >
                ABOUT
              </Button>
              <Button className={classes.buttons}
                variant="contained"
                onClick={() => handleButtonClick("/contact")}
              >
                CONTACT
              </Button>
              <Button  className={classes.buttons}
                variant="contained"
                onClick={() => handleSubmitClick()}
              >
                LOGOUT
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
