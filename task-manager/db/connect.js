const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://expressapps:1234@cluster0.wwugs.mongodb.net/task-manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
