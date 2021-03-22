const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.login = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
