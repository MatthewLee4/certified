const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/users');
let Userdb = require('../models/userModel');

//Sign In
router.post('/signin', (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    console.log(user)
    if (err){
      return next(err)
    }
    if(!user){
      return res.send("Wrong Email or Password")
    }
    else {
      const email = req.body.email;
      Userdb.find({ email: email })
      .then((user)=> {res.send(user)})
    }
  })(req, res, next)
})

 //Sign Up
router.post('/signup', controller.createUser)

module.exports = router;
