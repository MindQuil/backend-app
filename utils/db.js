const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const URI = process.env.MONGO_URI;
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB succesfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};


module.exports = connectDB;
