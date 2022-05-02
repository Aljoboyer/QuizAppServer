const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const path = require("path");
const bodyParser = require("body-parser");
// database connetion //
const connectDB = require("./config/db.js");
const port = process.env.PORT || 5000;
connectDB();

// route
const userRouter = require("./Routes/User/user.js");
const TeacherRouter = require("./Routes/Teacher/teacher.js");

app.use(fileUpload());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// -----------------------

app.use("/users", userRouter);

app.use("/teacher", TeacherRouter);
// --------------------------

app.get("/", (req, res) => {
  res.send("Quiz App Server is Connected");
});

app.listen(port, () => {
  console.log(`Quiz App ${port}`);
});
