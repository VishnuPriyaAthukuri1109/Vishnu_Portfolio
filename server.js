const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
// dotenv configuratin
dotenv.config();
// rest object
const app = express();
// middlewares
app.use(cors());
app.use(express.json());
// static files access
app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));
app.get("/*any", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// routes

// port
const PORT = process.env.PORT || 8081;

// listen
app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});
