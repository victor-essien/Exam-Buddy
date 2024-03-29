const asyncWrapper = require('../middleware/asyncWrapper')
const File = require('../models/File')
const path = require('path')

const getFiles = async(req, res) => {
  try {
    const files = await File.find({})
    res.status(200).json({files})
  } catch (error) {
    console.log(error)
  }
} 

const addFile = asyncWrapper(async (req, res) => {
    const {name, category} = req.body;
    const file = req.file.path
    const filename= req.file.originalname;
    await file
    console.log('originalname',req.file.originalname)
    const newFile = await File.create({name, file, category, filename})
    res.status(201).json({newFile})
})


const downloadFile = asyncWrapper(async (req, res) => {
    const {id} = req.params
    const file = await File.findById(id)
    console.log('file',file)
    if(!file) {
        throw next (new Error('File not found'))
    }
    const filePath = file.file
    console.log('file', filePath)
    res.download(filePath)
})  

module.exports = {
    getFiles,
    addFile,
    downloadFile
}