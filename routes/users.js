const router = require('express').Router();
const controller =  require('../controllers/users')

router.post('/add', controller.createUser); //CREATE USER

router.put('/update/:id', controller.updateUser); //UPDATE USER BY ID

module.exports = router;