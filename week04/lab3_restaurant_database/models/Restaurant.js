const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    address: {
        building: { type: Number, trim: true },
        street: { type: String, trim: true },
        zipcode: { type: Number, trim: true },
        },
    city:{ 
        type: String,
        required: [true, 'City fields cannot be empty'],
        trim: true,
    },
    cuisine:{
            type:String,
            required: [true, 'Cuisine fields cannot be empty'], 
            trim: true,
    },
    restaurant_id:{
            type: Number,
            required: [true, 'Restaurant ID cannot be empty'],
            trim: true,
    },
    created: {
            type: Date,
            default: Date.now
    },


})


const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
module.exports = Restaurant
