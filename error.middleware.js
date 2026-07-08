const logger = require("../utils/logger");

const errorMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  const message = err.message || "Server error";

  logger.error(message);

  res.status(statusCode).json({
    success: false,
    message
  });
};

module.exports = errorMiddleware;
