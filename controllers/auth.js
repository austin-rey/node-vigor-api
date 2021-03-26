const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const prisma = require('../utils/prismaClient');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// @desc      Register new user
// @route     POST /api/v1/register
// @access    Public
// @response  Signed JWT
exports.register = asyncHandler(async (req, res, next) => {
  let {
    id,
    first_name,
    last_name,
    email,
    password,
    weight,
    height,
    age,
    user_preferences,
  } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hashSync(password, salt);

  let newUser = {
    id,
    first_name,
    last_name,
    email,
    password: hashedPassword.toString(),
    created_at: new Date(),
    weight,
    height,
    age,
    user_preferences,
  };

  const user = await prisma.user.create({
    data: newUser,
  });

  sendTokenResponse(user, 201, res);
});

// @desc      Login existing user
// @route     GET /api/v1/login
// @access    Public
// @response  Signed JWT
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!bcrypt.compareSync(password, user.password)) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

const getSignedJwtToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = getSignedJwtToken(user.id);

  // Create cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 25 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
      user: {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
      },
    });
};
