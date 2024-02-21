const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    id:{
        type: Number,
    },

   name: {
    type: String,
   }
})

module.exports = mongoose.model('Category', categorySchema)





// const mongoose = require ('mongoose')

// const categorySchema = new mongoose.Schema({
//     id:{
//         type: Number,
//     },
//    name: {
//     type: String,
//     },
// })

// module.exports = mongoose.model('Category',categorySchema)