const errorHandler = (err, req, res, next) => {
  const defaults = {
    statusCode: err.statusCode || 500,
    message: err.message || "There was an error, try again.",
  };

  if (err.name === "ValidationError") {
    defaults.statusCode = 400;
    defaults.message = Object.keys(err.errors)
      .map((error) => error.charAt(0).toUpperCase() + error.slice(1))
      .join(", ");

    defaults.message = `${defaults.message} ${
      defaults.message.split(", ").length > 1 ? "are" : "is"
    } invalid`;
  }

  if (err.code && err.code === 11000) {
    defaults.statusCode = 400;
    defaults.message = `${Object.keys(err.keyValue)}`;
  }

  res.status(defaults.statusCode).json({ message: defaults.message });
};

export default errorHandler;
