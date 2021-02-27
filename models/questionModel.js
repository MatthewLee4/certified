const mongoose = require("mongoose")

const { Schema } = mongoose

const QuestionSchema = new Schema({
    test_Id: Number,
    question_Id: Number,
    description: String,
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question;