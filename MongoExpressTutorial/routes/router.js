const express = require('express')

const UsersRts = require("./users-routes")

const router = express.Router()

router.post('/users', UsersRts.addUser)
router.get('/users', UsersRts.viewUsers)
router.post('/documents', UsersRts.addDocument)
router.get('/documents', UsersRts.viewDocuments)


module.exports = router