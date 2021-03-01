let Userdb = require('../models/userModel'); //requiring DB
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.findAllUsers = (req, res) => {
    //   Userdb.find()
    //     .then(users => res.json(users))
    //     .catch(err => res.status(400).json('Error: ' + err));
    res.json({ message: "All users!" });
}

exports.findUser = (req, res) => {
    // Userdb.findById(req.params.id)
    //   .then(user => res.json(user))
    //   .catch(err => res.status(400).json('Error: ' + err));
    res.json({message: "User by id"})
}

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
            console.log(hashedPassword)
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
    // Userdb.findById(req.params.id)
    // .then(user => {
    //   user.name = req.body.name;
    //   user.email = req.body.email;
    //   user.password = req.body.password;

    //   user.save()
    //     .then(() => res.json('User updated!'))
    //     .catch(err => res.status(400).json('Error: ' + err));
    // })
    // .catch(err => res.status(400).json('Error: ' + err));
    res.json({message: "User Updated"});
}