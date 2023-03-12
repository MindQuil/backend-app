require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRouter');
const therapistRoutes = require('./routes/ExpertRouter');

const PORT = process.env.PORT;

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
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listens for requests
    app.listen(PORT, () => {
        console.log('Connected to MongoDB');
        console.log(`Server listening on port, ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });


module.exports = app;
