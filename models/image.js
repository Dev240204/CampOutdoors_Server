const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    image_url : {
        type : String,
        required : true
    },
    image_filename : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Image',ImageSchema);