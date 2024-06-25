const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const BlogSchema = new Schema({
    userId :{
        type :Schema.Types.ObjectId,
        ref : "User"
    },
    blog_name:{
        type: String,
        required: true
    },
    blog_description:{
        type: String,
        required: true
    },
    blog_destination:{
        type: String,
        required: true
    },
    blog_date:{
        type: Date,
        required: true
    },
    blog_image:{
        type: String,
        required: true
    },
    blog_key_highlights:{
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('Blogs',BlogSchema);