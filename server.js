require('dotenv').config();

const express = require('express');
const connectDB = require('./utils/db')
const { 
  userRoutes,
  therapistRoutes,
} = require('./routes/index')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// middlewares
app.use('/users', userRoutes);
app.use('/therapists', therapistRoutes);

// connect to db
connectDB();

app.listen(PORT, () => {
  console.log(`Server listening on port, ${PORT}`);
});

module.exports = app;
