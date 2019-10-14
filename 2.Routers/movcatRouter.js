const express = require('express')
const router = express.Router()
const {movcatController} = require('../1.Controllers/index')

router.post('/addconnection', movcatController.addMovCat)
router.delete('/deleteconnection', movcatController.deleteMovCat)

module.exports = router