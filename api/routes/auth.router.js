const express = require('express')
const router = express.Router()

const authController = require('../controller/auth.controller')

router.post("/register", authController.verifyUserByEmailAndRegister)
router.post("/login", authController.userLogin)


module.exports = router

