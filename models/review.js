const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const ReviewSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    ratings:{
        type: Number,
        required: true
    },
    review_description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Review",ReviewSchema);