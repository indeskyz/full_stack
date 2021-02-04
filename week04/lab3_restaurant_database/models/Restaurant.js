const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    address:{
        building: Number,
        street: String,
        zipcode: Number,
        required: [true, 'Address cannot be empty'],
        trim: true,

    },
    city:{ 
        type: String,
        required: [true, 'Street Name is required'],
        trim: true,
    },
    cuisine:{
            type:String,
            required: [true, 'Please enter the cusine that the restaurant specializes in'],
            trim: true,
    },
    restaurant_id:{
            type: Number,
            required: true,
            trim: true,
    },
    created: {
            type: Date,
            default: Date.now
    },


})


const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
module.exports = Restaurant
