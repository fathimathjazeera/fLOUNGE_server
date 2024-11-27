// config/db.js
const mongoose = require('mongoose');

const connectDB = () => {
  return mongoose
    .connect(
      process.env.MONGO_URL
    )
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });
};

module.exports = connectDB;
