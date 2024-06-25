const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');
const Image = require('./image');
const User = require('./user');

// const opts = { toJSON : { virtuals : true }};
const DestinationSchema = new Schema ({
    destination_title : {
        type : String,
        required : true
    },
    destination_location : {
        type : String,
        required : true
    },
    destination_description : {
        type : String,
        required : true
    },
    destination_price : {
        type : Number,
        required : true
    },
    destination_geometry : {
        type : {
            type : String,
            enum : ['Point'],
        },
        coordinates : {
            type : [Number],
        }
    },
    destination_images : [Image.schema],
    author :{
            type :Schema.Types.ObjectId,
            ref : "User"
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        }
    ]
});
// DestinationSchema.virtual("properties.popUp").get(function (){
//     return `<h5>${this.title}</h5>
//             <p>${this.description.slice(0,30)}</p>
//             <a href="/campgrounds/${this._id}">Visit</a>`
// })
DestinationSchema.post('findOneAndDelete',async function(data){
    if(data){
        await Review.remove({
            _id : {
                $in: data.reviews
            }
        })
    }
})
module.exports = mongoose.model('Destination',DestinationSchema);