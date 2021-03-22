const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

exports.getWellnessLogs = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.createWellnessLog = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.updateWellnessLogByLogId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});

exports.deleteWellnessLogByLogId = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
