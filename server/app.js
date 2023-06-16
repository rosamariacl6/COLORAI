var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testRouter = require("./routes/test");
var salonRouter = require("./routes/salon");
var questionRouter = require("./routes/question");
var photo_questionRouter = require("./routes/photo_question");
var answerRoute = require("./routes/answer");
var adminRouter = require("./routes/admin");
var serviceRouter = require("./routes/service");
var appointmentRouter = require("./routes/appointment");
var fabricRouter = require("./routes/fabric");
var questionOptionRouter = require("./routes/questionOptions");
var visitRouter = require("./routes/visit");
var photoRouter = require("./routes/photo");

var app = express();

app.use(
  cors({
    origin: "*",
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/test", testRouter);
app.use("/salon", salonRouter);
app.use("/question", questionRouter);
app.use("/photoQuestion", photo_questionRouter);
app.use("/answer", answerRoute);
app.use("/admin", adminRouter);
app.use("/service", serviceRouter);
app.use("/appointment", appointmentRouter);
app.use("/fabric", fabricRouter);
app.use("/questionOptions", questionOptionRouter);
app.use("/visit", visitRouter);
app.use("/photo", photoRouter);

//----------------------------------------------------------------
//
//
//
//
//
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
