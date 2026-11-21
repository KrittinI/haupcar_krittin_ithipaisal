const errorMiddleware = (err, req, res, next) => {
  const resError = {
    message: err.message,
  };

  if (err.errors) {
    resError.errors = err.errors;
  }

  res.status(err.statusCode || 500).json(resError);
};

module.exports = errorMiddleware;
