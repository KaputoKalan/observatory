const mongoose = require("mongoose")
const Schema = mongoose.Schema



const postSchema = new Schema ({
    name: { type: String, required: true},
    phone: { type: String, required: true},
    location: { type: String, required: true},
    description: { type: String, required: true},
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post




