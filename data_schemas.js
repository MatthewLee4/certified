const mongoose = require("mongoose")

const { Schema } = mongoose

const userSchema = new Schema({
    user_id: Number,
    name: String,
    email: String,
    userName: String,
    password: String,
    testTaken: Number,
    testPassed: Number,
    badges: Number
});

const QuestionSchema = new Schema({
    test_Id: Number,
    question_Id: Number,
    description: String,
})

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
const TestSchema = new Schema({
    test_Id: Number,
    category: String,
    type: String,
    difficulty: String
})

const badgeSchema = new Schema({
    badge_id: Number,
    badge_name: String, 
})

const userBadge = new Schema({
    name: String,
    badge_id: Number,
    collected: Boolean,
})

module.exports = mongoose.model('Question', QuestionSchema)
module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('test', TestSchema)
module.exports = mongoose.model('badge', badgeSchema)
module.exports = mongoose.model('userBadge', userBadge)
module.exports = mongoose.model('answers', answerSchema)
