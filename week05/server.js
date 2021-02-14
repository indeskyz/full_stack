require("dotenv").config()
const mongoDB = process.env.MONGODB_URL
const port = process.env.PORT
const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/UsersRoutes.js')
const app = express()

const currTime = new Date().toLocaleString()

app.use(express.json())


mongoose.connect(`${mongoDB}`, {useNewUrlParser:true, useUnifiedTopology:true})

app.use(usersRouter)

app.listen(port,()=>{
        console.log(`Server started at: ${currTime} \nServer is running...`)
})
