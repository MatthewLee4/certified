let Userdb = require('../models/userModel'); //requiring DB
const bcrypt = require('bcrypt');
const passport = require('passport');
const saltRounds = 10;

exports.createUser = (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log("inside create")
     
    //CHECK EMAIL FIRST TO SEE IF USER ALREADY EXISTS 
    Userdb.findOne({ email: email }, async(err, user) => {
        if (err) throw err;
        if (user == null)
        {   
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const newUser = new Userdb({
                name,
                email,
                password: hashedPassword,
            });                      

            await newUser.save()
                .then(() => {
                    Userdb.find({ email: email })
                        .then((user)=> {
                            res.send(user); //array -> data[0]
                            console.log("User Created")
                        })  
                })
                .catch(err => res.status(400).json('Error: ' + err));                     
        } else if (user.name == "" || user.email == "" || user.password == "") {
            console.log(user)
            res.send('Invalid Input')
        } else {
            res.send("Email Already Exists")
        }
      })
}

exports.updateUser = (req, res) => {
    console.log(req.params.id)
    Userdb.findById((req.params.id), async (err, user) => {
        console.log(user)
        user.name = req.body.name;
        user.email = req.body.email;   

        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        user.password = hashedPassword; 
  
        user.save()
          .then(() =>{
              console.log("DATABASE UPDATED")
            res.json('User updated!')
          }) 
        .catch(err => res.status(400).json('Error: ' + err));

    })
}
