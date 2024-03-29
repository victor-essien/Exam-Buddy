const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        const uploadDir = path.join(__dirname, '../uploads')
        console.log('uploadDir', uploadDir)
        // Where to store the file
        
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        const normalizedFilename = file.originalname.replace(/\\/, '/');
        console.log(normalizedFilename)
        cb(null, new Date().toISOString().replace(/:/g, '-') + normalizedFilename)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 20
    },

    fileFilter: function(req, file, cb){
        const allowedFileTypes = ['.pdf', '.docx', '.doc', '.pptx']
        const fileExtension = path.extname(file.originalname).toLowerCase()
        if(allowedFileTypes.includes(fileExtension)){
            cb(null, true)
        }else {
            cb(new Error('Invalid file type'))
        }
    }
})

module.exports = upload;