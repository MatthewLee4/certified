const mongoose = require("mongoose")

const { Schema } = mongoose

const userBadge = new Schema({
    name: String,
    badge_id: Number,
    collected: Boolean,
})

const UserBadge = mongoose.model('userBadge', userBadge);
module.exports = UserBadge;

