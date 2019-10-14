const express = require('express')
const router = express.Router()
const {movieController} = require('../1.Controllers/index')

router.post('/addmovie', movieController.addMovie)
router.delete('/deletemovie', movieController.deleteMovie)
router.patch('/editmovie', movieController.editMovie)

module.exports = router