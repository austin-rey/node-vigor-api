const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const prisma = require('../utils/prismaClient');

// @desc      Get ALL Wellness Logs
// @route     GET /api/v1/wellness/
// @access    Private
exports.getWellnessLogs = asyncHandler(async (req, res, next) => {
  const wellnessLogs = await prisma.wellness_logs.findMany();
  res.status(200).json({ success: true, data: wellnessLogs });
});

// @desc      Get ALL Wellness Logs By User Id
// @route     GET /api/v1/wellness/user/:user_id
// @access    Private
exports.getWellnessLogsByUserId = asyncHandler(async (req, res, next) => {
  const id = req.params.user_id;

  const wellnessLogs = await prisma.wellness_logs.findMany({
    where: {
      user_id: id,
    },
  });

  res.status(200).json({ success: true, data: wellnessLogs });
});

// @desc      Create Wellness Log
// @route     POST /api/v1/wellness/
// @access    Private
exports.createWellnessLog = asyncHandler(async (req, res, next) => {
  let data = req.body;
  data.user_id = req.user.id;

  const newWellnessLog = await prisma.wellness_logs.create({
    data: data,
  });

  res.status(200).json({ success: true, data: newWellnessLog });
});

// @desc      Update Diet Log By ID
// @route     PUT /api/v1/wellness/:wellness_id
// @access    Private
exports.updateWellnessLogByLogId = asyncHandler(async (req, res, next) => {
  const id = req.params.wellness_id;

  const updatedWellnessLog = await prisma.wellness_logs.update({
    where: {
      id: id,
    },
    data: req.body,
  });

  res.status(200).json({ success: true, data: updatedWellnessLog });
});

// @desc      Delete Diet Log By ID
// @route     DELETE /api/v1/wellness/:wellness_id
// @access    Private
exports.deleteWellnessLogByLogId = asyncHandler(async (req, res, next) => {
  const id = req.params.wellness_id;

  const deletedWellnessLog = await prisma.wellness_logs.delete({
    where: {
      id: id,
    },
  });

  res.status(200).json({ success: true, data: {} });
});
