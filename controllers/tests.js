//let Testdb = require('../models/'); //requiring DB

exports.findAllTests = (req, res) => {
    //   Testdb.find()
    //     .then(tests => res.json(tests))
    //     .catch(err => res.status(400).json('Error: ' + err));
    res.json({ message: "All tests!" });
}

exports.findTests = (req, res) => {
    // Testdb.find({ category: req.params.category }) //is that query?
    //   .then(tests => res.json(tests))
    //   .catch(err => res.status(400).json('Error: ' + err));
    res.json({message: "Tests by category"})
}

exports.createTest = (req, res) => {
    //   are we putting images? What else we are going to have in test? Will questions
    //   and answer be in the same table?

    //   const name = req.body.name;
    //   const category = req.body.category;
    //   const image_path = req.body.image_path; 

    //   const newTest = new Testdb({
    //     name,
    //     category,
    //     image_path,
    //   });

    //   newTest.save()
    //     .then(() => res.json('Test added!'))
    //     .catch(err => res.status(400).json('Error: ' + err));
    res.json({ message: "Test created successfully" });
}

exports.updateTest = (req, res) => {
    // Testdb.findById(req.params.id)
    // .then(test => {
    //   user.name = req.body.name;
    //   user.category = req.body.category;
    //   user.image_path = req.body.image_path;

    //   user.save()
    //     .then(() => res.json('Test updated!'))
    //     .catch(err => res.status(400).json('Error: ' + err));
    // })
    // .catch(err => res.status(400).json('Error: ' + err));
    res.json({message: "Test Updated"});
}

exports.deleteTest = (req, res) => {
    // Testdb.findByIdAndDelete(req.params.id)
    // .then(() => res.json('Test deleted.'))
    // .catch(err => res.status(400).json('Error: ' + err));
    res.json({message: "Test Deleted"});
}