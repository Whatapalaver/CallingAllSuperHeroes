const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pino = require("express-pino-logger")();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// API Calls
// Obligatory Hello World!
app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get("/api/hello", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ express: "Hello from the express server" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
