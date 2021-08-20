const router = require('express').Router()
const authController = require('../controllers/auth-controller')
const validation = require('./../middlewares/validation')
const schema = require('./../helpers/validation-schema')

router.post('/register', validation(schema.register), authController.register)
router.post('/login', validation(schema.login), authController.login)

module.exports = router