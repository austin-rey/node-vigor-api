const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const errorHandler = require('./middleware/error');

// Prisma ORM
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Env. Vars
dotenv.config({ path: './config.env' });

// Routes
// const auth = require('');
// const fitness = require('');
// const goals = require('');
// const diet = require('');
// const wellness = require('');

// Init App
const app = express();

// Body Parser
app.use(express.json());

// Cors - Todo
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

// Security Packages
app.use(helmet());
app.use(xss());

// Mount routers
// app.use('/api/v1/auth', auth);
// app.use('/api/v1/fitness', fitness);
// app.use('/api/v1/goals', goals);
// app.use('/api/v1/diet', diet);
// app.use('/api/v1/wellness', wellness);

// Controller error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log('Server Running'.yellow.bold);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
