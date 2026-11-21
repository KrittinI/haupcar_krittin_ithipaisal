const createError = (statusCode, message, errors = null) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  if (errors) {
    error.errors = errors;
  }
  throw error;
};

module.exports = { createError };
