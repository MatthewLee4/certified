let Userdb = require('../models/userModel'); 
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const express = require('express');
const app = express();

//Passport configuration - Local Strategy
passport.use(new LocalStrategy({
    passReqToCallback : true,
    usernameField: 'email',
    passwordField: 'password',
  },
    function(req, email, password, cb) {
      Userdb.findOne({ email: email })
      .then((user,err) => {
        if (err){
          return cb(err)
        }
        if(!user){
          return cb(null,false)
        } 
    
        if(user != null)
        {    
          bcrypt.compare(password, user.password, function(err, res){
            if(res){
              return cb(null, user)
            } else {
              return cb(null, false);
            }
          })  
        }
      });
    }))
    
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  
