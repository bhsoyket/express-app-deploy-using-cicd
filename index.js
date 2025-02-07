const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.send("AWS Deployment Successfull.");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server listening on http://127.0.0.1:${PORT}`);
});

module.exports = app;
