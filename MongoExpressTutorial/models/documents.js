const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Document = new Schema(
    {
        author: { type: String, required: true },
    }
)

module.exports = mongoose.model('documents', Document)