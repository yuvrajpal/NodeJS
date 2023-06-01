const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://expressapps:1234@cluster0.wwugs.mongodb.net/task-manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("CONNECTED TO DB");
  })
  .catch((err) => {
    console.log(err);
  });
