const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
var passport = require('passport');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

require('dotenv').config();

const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// app.get("/", (req, res) => {
//   res.send("Welcome to my mail api");
// });

app.post("/api/v1", (req, res) => {
  let data = req.body;

let smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

smtpTransport.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

let mailOptions = {
  from: data.email,
  to: "odeans247@gmail.com",
  subject: `${data.subject}`,
    html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
    smtpTransport.close();
  });
});

// ALL THE CODE FOR FOR EMAILER ABOVE 

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:7200000, sameSite: false}
}));
app.use(cookieParser("secret"));
app.use(flash());

require('./controllers/authentication');

app.use(passport.initialize());
app.use(passport.session());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
mongoose.connection.on('error',function(err){   
  console.log(err)})

const usersRouter = require('./routes/users');
const testsRouter = require('./routes/tests');
const authRouter = require('./routes/authentication');

//middleware
app.use('/users', usersRouter); 
app.use('/tests', testsRouter);
app.use('/auth', authRouter);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)});