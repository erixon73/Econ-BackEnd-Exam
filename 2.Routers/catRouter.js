const express = require('express')
const router = express.Router()
const {catController} = require('../1.Controllers/index')

router.get('/getcategory', catController.getCategory)
router.post('/addcategory', catController.addCategory)
router.delete('/deletecategory', catController.deleteCategory)
router.patch('/editcategory', catController.editCategory)

module.exports = router