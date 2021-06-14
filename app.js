const mongoose = require("mongoose")
const express = require("express");
const app = express();
const users = require("./routes/api/users");
const restaurants = require("./routes/api/restaurants");
const bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;
const port = process.env.PORT || 5000;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Welcome to YouChoose"));
app.use("/api/users", users);
app.use("/api/restaurants", restaurants);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));


