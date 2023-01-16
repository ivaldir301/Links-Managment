const express = require('express')
const router = express.Router()

const controller = require('../controller/linksmanagment.controller')

router.get("/:id", controller.getLinksByUserId)
router.post("/", controller.addLinksByUserId)
router.put("/", controller.editLinksByUserId)
router.delete("/:linkId", controller.deleteLinksByUserId)

module.exports = router
