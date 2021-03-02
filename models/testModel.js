const mongoose = require("mongoose")

const { Schema } = mongoose

const TestSchema = new Schema({
    test_Id: Number,
    category: String,
    type: String,
    difficulty: String
})

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;