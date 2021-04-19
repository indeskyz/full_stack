const dotenv = require("dotenv").config();
const createGraphQLLogger = require("graphql-log");
const express = require("express");
const mongoose = require("mongoose");
const TypeDefs = require("./schemas/schema");
const Resolvers = require("./resolver/resolver");
const format = require("./errors");
const cors = require("cors");
const writeLog = require("./logger");
const { ApolloServer } = require("apollo-server-express");

const mongoURL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const serverStartTime = new Date().toLocaleString();
const logExecutions = createGraphQLLogger();

logExecutions(Resolvers);

//to supress warning when using 'unique on the models'
mongoose.set("useCreateIndex", true);
const connectToDB = mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connectToDB
  .then(() => {
    console.log(
      `\nSuccessfully Connected to Database! \nConnection started at: ${serverStartTime}\n`
    );
    writeLog.logger(`Database Connection Successfull: ${serverStartTime}\n`);
  })
  .catch((err) => {
    console.error(
      `ERROR CONNECTING to MONGODB -- Is your connection string correct?\n `,
      `\n${err} \n`
    );
    writeLog.logger(
      `\nDatabase Connection Error:\n ${err} \nOCCURED AT: ${serverStartTime}\n`
    );
  });

const server = new ApolloServer({
  typeDefs: TypeDefs.typeDefs,
  resolvers: Resolvers.resolvers,
  onHealthCheck: () => {
    new Promise((resolve, reject) => {
      console.log("Health Check Passed!");
      writeLog.logger("------HEALTH CHECK PING--------");
      resolve();
    });
  },
  formatError: format.formatError,
});

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use("*", cors());
server.applyMiddleware({
  app,
});

const apolloURL = `http://localhost:${PORT}${server.graphqlPath}`;
try {
  app.listen({ port: PORT }, () =>
    console.log(
      `\nSuccessfully Connected to GraphQL!\nServer ready at: ${apolloURL} \nConnection started at: ${serverStartTime}\n`
    )
  );
  writeLog.logger(`\nGraphQL Successfully Connected: ${serverStartTime}\n`);
} catch (err) {
  console.log(
    "\nERROR could not connect to server: \n",
    `\n ${err} \n`,
    `\nERROR OCCURED AT: ${serverStartTime} \nCheck Health by pinging: ${apolloURL}/.well-known/apollo/server-health`
  );
  writeLog.logger(
    `\nGraphQL Connection Error: ${err} \nOccured at: ${serverStartTime}\n`
  );
}
