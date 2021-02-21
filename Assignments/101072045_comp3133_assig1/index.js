const dotenv = require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const TypeDefs = require('./schemas/schema')
const Resolvers = require('./resolver/resolver')
const bodyParser = require('body-parser')
const cors = require('cors')
const { ApolloServer } = require("apollo-server-express");

const mongoURL = process.env.MONGODB_URL
const PORT = process.env.PORT
const currTime = new Date().toLocaleString()

//used to supress a warning when using the 'unique' option on the models
mongoose.set('useCreateIndex', true)

const connect = mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


connect.then(
  (db) => {
    console.log(`\nConnection Successful! \nConnected on: ${currTime}`);
  },
  (err) => {
    console.log(err);
  }
);


const server = new ApolloServer({
  typeDefs: TypeDefs.typeDefs,
  resolvers: Resolvers.resolvers,
});

const app = express();
app.use(bodyParser.json())
app.use('*',cors())
server.applyMiddleware(({app}))
app.listen({port: PORT}, ()=>
    console.log(`\nServer ready at http://localhost:${PORT}${server.graphqlPath}\n`)

        
)

