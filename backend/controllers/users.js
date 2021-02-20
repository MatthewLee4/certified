//let Userdb = require('../models/'); //requiring DB

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
    console.log(name)
     
    //CHECK EMAIL FIRST TO SEE IF USER ALREADY EXISTS 
    // Userdb.find({ email: email }) //is that query?
    //   .then((user) => {
    //     if (user == null)
    //     {           
    //         const newUser = new Userdb({
    //             name,
    //             email,
    //             password,
    //         });

    //         newUser.save()
    //             .then(() => res.json('User added!'))
    //             .catch(err => res.status(400).json('Error: ' + err));
            res.json({ message: "User created successfully" });
    //     } else {
    //         res.json({ message: "Email Already Exists" }); 
    //     }
    //   })
    //   .catch(err => res.status(400).json('Error: ' + err));
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