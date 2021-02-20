const router = require('express').Router();
const controller =  require('../controllers/users')

router.get('/', controller.findAllUsers); //GET ALL USERS

router.get('/:id', controller.findUser); //GET USER BY ID

router.post('/add', controller.createUser); //CREATE USER

router.post('/update/:id', controller.updateUser); //UPDATE USER BY ID

module.exports = router;