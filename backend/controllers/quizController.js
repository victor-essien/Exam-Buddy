const Quiz = require('../models/Quiz')
const Category = require('../models/Category')
const getQuiz = async(req, res) => {
    try {
       const {amount, category} = req.query
       let query = Quiz.find() 
       if(category) { 
        query = query.where({category : category})
       }
       const questions = await query.limit(parseInt(amount))
       res.json({questions})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
}


const getCategory = async(req, res) => {
    try {
        const categoryResult = await Category.find()
        res.json({categoryResult})
    }
    catch(error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
    }
}

module.exports = {
    getQuiz,
    getCategory
}