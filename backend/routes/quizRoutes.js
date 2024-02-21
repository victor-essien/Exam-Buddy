const express = require('express')

const router = express.Router()
const {getQuiz, getCategory} = require('../controllers/quizController')


router.get('/quiz', getQuiz)
router.get('/quiz_category', getCategory)

module.exports = router