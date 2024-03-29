const upload = require('../middleware/multer')
const express = require('express')

const router = express.Router()
const {getFiles, addFile, downloadFile} = require('../controllers/filesController')


router.get('/', getFiles)
router.post('/', upload.single('file'), addFile)
router.get('/download/:id', downloadFile)

module.exports = router