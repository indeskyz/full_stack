import dotenv from 'dotenv'
dotenv.config()
const mongoDB = process.env.DB_CONNECTION
const port = process.env.PORT
const express = require('express')
const mongoose = require('mongoose')
const restaurantRouter = require('./routes/RestaurantRoutes.js')
const app = express()


app.use(express.json())


mongoose.connect(`${mongoDB}`, {useNewUrlParser:true, useUnifiedTopology:true})

app.use(restaurantRouter)

app.listen(port,()=>{
        console.log('Server is running...')
})
