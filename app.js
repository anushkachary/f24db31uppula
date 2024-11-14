require('dotenv').config();
mongoose = require('mongoose');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artifactsRouter = require('./routes/artifacts');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var Artifact = require("./models/artifact");
var resourceRouter = require('./routes/resource');

var app = express();

const connectionString = process.env.MONGO_CON
mongoose.connect(connectionString);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
    console.log("Connection to DB succeeded");
});

// Function to seed the database
async function recreateDB() {
  // Delete all existing artifacts
  await Artifact.deleteMany();
  // Create instances of artifacts
  let instance1 = new Artifact({ artifactName: "Rosetta Stone", originYear: "196 BC", culture: "Ancient Egyptian" });
  let instance2 = new Artifact({ artifactName: "Terracotta Army", originYear: "210–209 BC", culture: "Ancient Chinese" });
  let instance3 = new Artifact({ artifactName: "Bust of Nefertiti", originYear: "1345 BC", culture: "Ancient Egyptian" });

  // Save instances to the database
  await instance1.save().then(() => console.log("Artifact 1 saved"));
  await instance2.save().then(() => console.log("Artifact 2 saved"));
  await instance3.save().then(() => console.log("Artifact 3 saved"));
}

// Seed the database on server start if needed
let reseed = true;
if (reseed) {
  recreateDB();
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artifacts', artifactsRouter);
app.use('/grid', gridRouter);
app.use('/randomitem', pickRouter);
app.use('/resource', resourceRouter);
//app.use('/api/artifacts', artifactsRouter);
//app.use('/resource', artifactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
