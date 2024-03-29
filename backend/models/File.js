const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    file: {
        type: String,
        required: [true, 'Please provide a file']
    },
    category: {
        type: String,
        trim: true
    },
    filename: {
        type:String,
        
    }
})

module.exports = mongoose.model('File', fileSchema)