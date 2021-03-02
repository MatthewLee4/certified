const mongoose = require("mongoose")

const { Schema } = mongoose

const userSchema = new Schema({
    user_id: Number,
    name: String,
    email: String,
    password: String,
    testTaken: Number,
    testPassed: Number,
    badges: Number
});

const User =  mongoose.model('User', userSchema);

module.exports = User ;