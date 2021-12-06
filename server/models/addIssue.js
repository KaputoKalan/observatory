const mongoose = require("mongoose")
const Schema = mongoose.Schema



const addIssueSchema = new Schema ({
    issue: { type: String, required: true},
    location: { type: String, required: true},
    institution: { type: String, required: true},
    date: { type: String, required: true},
    status: { type: String, required: true},
})

const AddIssue = mongoose.model("AddIssue", addIssueSchema)

module.exports = AddIssue



