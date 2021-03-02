const router = require('express').Router();
const controller =  require('../controllers/users')

router.get('/:id', controller.findUser); //GET USER BY ID

router.post('/add', controller.createUser); //CREATE USER

router.put('/update/:id', controller.updateUser); //UPDATE USER BY ID

module.exports = router;