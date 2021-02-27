const mongoose = require("mongoose")

const { Schema } = mongoose

const badgeSchema = new Schema({
    badge_id: Number,
    badge_name: String, 
})

const Badge = mongoose.model('Badge', badgeSchema);

module.exports = Badge;