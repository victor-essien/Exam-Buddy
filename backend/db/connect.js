const mongoose = require('mongoose')

const connectDB = async(url) => {
   return  await mongoose.connect(url, 
console.log('Connected to Mongodb atlas')
)
}

module.exports = connectDB