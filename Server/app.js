const cors = require("cors");
const express = require("express");
const wordsRoutes = require("./routes/words");

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/", wordsRoutes);

//global error handler
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
module.exports = app;
