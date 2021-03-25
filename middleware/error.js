const ErrorResponse = require('../utils/errorResponse');
const colors = require('colors');

const errorHandler = (err, req, res, next) => {
  //Log to console
  console.log(`${err.message}`.red.bold);

  res.status(err.statusCode || 500).json({
    success: false,
    code: err.code || null,
    message: 'Server Error',
  });
};

module.exports = errorHandler;
