const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Get ALL Wellness Logs
// @route     GET /api/v1/wellness/
// @access    Private
exports.getWellnessLogs = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Get ALL Wellness Logs By User Id
// @route     GET /api/v1/wellness/user/:user_id
// @access    Private
exports.getWellnessLogsByUserId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Create Wellness Log
// @route     POST /api/v1/wellness/
// @access    Private
exports.createWellnessLog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Update Diet Log By ID
// @route     PUT /api/v1/wellness/:wellness_id
// @access    Private
exports.updateWellnessLogByLogId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

// @desc      Delete Diet Log By ID
// @route     DELETE /api/v1/wellness/:wellness_id
// @access    Private
exports.deleteWellnessLogByLogId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
