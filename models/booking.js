const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Destination = require('./destination');

const BookingSchema = new Schema({
    userId :{
        type :Schema.Types.ObjectId,
        ref : "User"
    },
    destination_id:{
        type :Schema.Types.ObjectId,
        ref : "Destination"
    },
    booking_start_data:{
        type: Date,
        required: true
    },
    booking_end_date:{
        type: Date,
        required: true
    },
})

module.exports = mongoose.model('Booking',BookingSchema);