require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const penggunaRouter = require("./routes/pengguna");
app.use("/pengguna", penggunaRouter);

const roleRouter = require("./routes/role");
app.use("/role", roleRouter);

const ideaplanRouter = require("./routes/ideaplan");
app.use("/ideaplan", ideaplanRouter);

const bahanBakuRouter = require("./routes/bahan_baku");
app.use("/bahan-baku", bahanBakuRouter);

const tenagaKerjaRouter = require("./routes/tenaga_kerja");
app.use("/tenaga-kerja", tenagaKerjaRouter);

const biayaOverheadRouter = require("./routes/biaya_overhead");
app.use("/biaya-overhead", biayaOverheadRouter);

const biayaPenyusutanRouter = require("./routes/biaya_penyusutan");
app.use("/biaya-penyusutan", biayaPenyusutanRouter);

const hppRouter = require("./routes/hpp");
app.use("/hpp", hppRouter);

const pertanyaanJawabanRouter = require("./routes/pertanyaan_jawaban");
app.use("/pertanyaan-jawaban", pertanyaanJawabanRouter);

app.use("/", function (req, res, next) {
  res.send("Express REST API");
});

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
