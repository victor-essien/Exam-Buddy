const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const   PORT   = process.env.PORT;
const quizRoutes = require("./routes/quizRoutes");
const fileRoutes = require('./routes/fileRoutes')
const cors = require('cors')
//express app
const app = express();
app.use(cors())
app.use(express.json())
const connectDB = require('./db/connect')
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api',quizRoutes);
app.use('/api/file', fileRoutes)
//listen for requests


connectDB(process.env.Mongo_URI)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})