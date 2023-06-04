const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./api/Users');
const theaterRouter = require('./api/Theater');
const sessionRouter = require('./api/Session');
const theartesRouter = require('./api/Theaters');
require("dotenv").config(); 

const app = express();

app.use(express.json());
app.use(usersRouter);
app.use(theaterRouter);
app.use(sessionRouter);
app.use(theartesRouter);

async function startApp() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to the database');
    app.listen(process.env.PORT, () => console.log('App listening on port:', process.env.PORT));
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

startApp();
