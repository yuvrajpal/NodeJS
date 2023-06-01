const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

// middlewares
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}`));
