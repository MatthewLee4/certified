import React from 'react';
import MenuAppBar from './Header'

<<<<<<< Updated upstream
const Profile = () => {
    return (
        <>
=======

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
    
  },
  rootCard1: {
    width: 300,
    margin: "auto",
    backgroundColor: "#f4d1ae",
    
    
  },
  rootCard2: {
    width: 800,
    marginBottom:15,
    backgroundColor: "#f4d1ae",
    color: "#12263A",
    margin: "auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontFamily: "marker felt",
    fontSize: 24,
    color: "#12263A",
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

const Profile = () =>  {
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
>>>>>>> Stashed changes
        <MenuAppBar />
        <div>
            <h1>PROFILE PAGE</h1>
        </div>
        </>
    )
};

export default Profile;
