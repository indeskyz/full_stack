require("dotenv").config()
const mongoDB = process.env.DB_CONNECTION
const port = process.env.PORT
const express = require('express')
const mongoose = require('mongoose')
const restaurantRouter = require('./routes/RestaurantRoutes.js')
const app = express()

const currTime = new Date().toLocaleString()

app.use(express.json())


mongoose.connect(`${mongoDB}`, {useNewUrlParser:true, useUnifiedTopology:true})

app.use(restaurantRouter)

app.listen(port,()=>{
        console.log(`Server started at: ${currTime} \nServer is running...`)
})
