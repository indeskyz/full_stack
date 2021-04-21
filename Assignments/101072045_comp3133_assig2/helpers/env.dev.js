const dotenv = require("dotenv").config();

//API CREDS
const PORT = process.env.PORT;
const mongoURL = process.env.MONGO_URL;
const clientOrigin = process.env.clientOrigin;
const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;

//LOGIN CREDS
const clientEmail = process.env.clientEmail;
const clientPassword = process.env.clientPassword;

//just for additonal troubleshooting
if (!PORT) {
  throw new Error(
    `.env is missing the definition for PORT! \nMake sure to create it and add the 
      variable PORT with the value of: 9000`
  );
}

if (!mongoURL) {
  throw new Error(
    `.env is missing the definition for mongoURL! \nMake sure to create it and add the 
      variable mongoURL with the value of: MONGO_URL=mongodb+srv://NAME:<yourpasswordhere>@mean.dhnhb.mongodb.net/assignment02?retryWrites=true&w=majority
`
  );
}

if (!clientOrigin) {
  throw new Error(
    `.env is missing the definition for clientOrigin! \nMake sure to create it and add the variable clientOrigin with the value of: http://localhost:4200`
  );
}

if (!audience) {
  throw new Error(
    `.env is missing the definition for AUTH0_AUDIENCE! \nMake sure to create it and add the variable AUTH0_AUDIENCE with the value of: https://hotelBooking`
  );
}

if (!domain) {
  throw new Error(
    `.env is missing the definition for AUTH0_DOMAIN! \nMake sure to create it and add the variable AUTH0_DOMAIN with the value of: hotel-booking.us.auth0.com`
  );
}

if (!clientEmail) {
  throw new Error(
    `.env is missing the definition for clientEmail! \nMake sure to create it and add the variable clientEmail with the value of: hotelBookerForGBC@gmail.com`
  );
}

if (!clientPassword) {
  throw new Error(
    `.env is missing the definition for clientPassword! \nMake sure to create it and add the variable clientPassword with the value of: GBCSchoolPasswordForFullStack2020`
  );
}

module.exports = {
  mongoURL,
  PORT,
  clientOrigin,
  audience,
  domain,
  clientEmail,
  clientPassword,
};
