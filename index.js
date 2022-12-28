const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer"); ///for fomr having multiple fields
const { response } = require("express");
require("dotenv").config({ path: "./.env.local" });

const upload = multer();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static("pulbic"));

const DB_URL = process.env.DB_URL;
console.log(DB_URL);

mongoose.mongoose
    .connect(DB_URL)
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
        console.log("Connection not established");
    });

app.use("/", require("./routes/save"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Server started at ${PORT}`);
});
