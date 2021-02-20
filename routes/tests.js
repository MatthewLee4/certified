const router = require('express').Router();
const controller =  require('../controllers/tests')

router.get('/', controller.findAllTests); //GET ALL TESTS

router.get('/:category', controller.findTests); //GET TESTS BY CATEGORY

router.post('/add', controller.createTest); //CREATE TEST

router.post('/update/:id', controller.updateTest); //UPDATE TEST BY ID

router.delete('/:id', controller.deleteTest); //DELETE TEST BY ID

module.exports = router;