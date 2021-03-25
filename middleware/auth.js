const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const prisma = require('../utils/prismaClient');

// Validate that user exists in DB and add user information to req object
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  // Parse token from bearer or cookie
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  // Make sure token exists
  if (!token) {
    return next(
      new ErrorResponse('Not authorized to access this resource', 401)
    );
  }

  try {
    // Verify token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });

    next();
  } catch (error) {
    console.log(error);
    return next(
      new ErrorResponse('Not authorized to access this resource', 401)
    );
  }
});

// Validate user making an update/delete owns the resource
exports.authorize = asyncHandler(async (req, res, next) => {
  next();
});
