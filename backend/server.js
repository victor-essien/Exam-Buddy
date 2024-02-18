const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const   PORT   = process.env.PORT;
const quizRoutes = require("./routes/quizRoutes");
//express app
const app = express();
app.use(express.json())
const connectDB = require('./db/connect')
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api',quizRoutes);
//listen for requests


connectDB(process.env.Mongo_URI)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})