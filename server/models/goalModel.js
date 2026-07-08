const mongoose = require("mongoose")

const Schema = mongoose.Schema

const goalSchema = new Schema({
    title: String,
    description: String,
    isFavorite: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
})

const Goal = mongoose.model("Goal", goalSchema)

module.exports = Goal