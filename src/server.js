const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

/**url cors settings */
// * You will need to setup .env file for localhost env variables (dotenv) before you can use the server
const { corsOptionsDelegate } = require("./helpers/cors.js");
app.use(cors(corsOptionsDelegate));

//routes
app.get("/", (req, res) => {
  res.send("iK home page1");
});

app.get("/api/signup", (req, res) => {
  res.send("iK signup page");
});

app.post("/api/signup", (req, res) => {
  res.send(req.body);
});

app.get("/api/login", (req, res) => {
  res.send("iK login page");
});

app.post("/api/login", (req, res) => {
  res.send(req.body);
});

app.post("/api/logout", (req, res) => {
  res.send(req.body);
});

app.get("/api/authpage", (req, res) => {
  res.send("iK auth page");
});

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`iK server connection on http://localhost:${port}/`)
);
