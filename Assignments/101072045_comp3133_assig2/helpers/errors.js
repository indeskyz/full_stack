const apolloError = require("apollo-server-errors");

const formatError = (err) => {
  if (err.message.startsWith("Database Error")) {
    return new Error("Internal Server Error");
  }
  return err;
};

const validateField = (argToBeValidated, arguementName, regexPattern) => {
  if (!regexPattern.test(argToBeValidated)) {
    throw new apolloError.ValidationError(
      `Invalid argument value for ${arguementName}`
    );
  }
};

module.exports = {
  formatError,
  validateField,
};
