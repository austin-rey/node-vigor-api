const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Register new user
// @route     POST /api/v1/register
// @access    Public
// @response  Signed JWT
exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Login existing user
// @route     GET /api/v1/login
// @access    Public
// @response  Signed JWT
exports.login = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
