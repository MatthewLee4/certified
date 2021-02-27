const mongoose = require("mongoose")

const { Schema } = mongoose

const answerSchema = new Schema({
    answer_id: Number,
    question_Id: Number,
    description: String,
    isCorrect: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Answers = mongoose.model('Answers', answerSchema)

module.exports = Answers;