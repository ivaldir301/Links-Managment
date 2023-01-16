const express = require('express')
const router = express.Router()

const controller = require('../controller/usersmanagment.controller')

router.get("/:user_password", controller.verifyUserByEmail)
router.post("/", controller.registerNewUser)


module.exports = router

