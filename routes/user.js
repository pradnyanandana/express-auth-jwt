const { authentication, authorization } = require('../middlewares/auth')
const userController = require('../controllers/user-controller')
const router = require('express').Router()

router.get('/profile', authentication, authorization("member", "admin"), userController.profile)
router.get('/', authentication, authorization("admin"), userController.list)

module.exports = router