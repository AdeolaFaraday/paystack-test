require("dotenv").config();
const app = require("express")();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = 8000;

app.use(bodyParser.json());

app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(PORT, () =>
  mongoose
    .connect("mongodb://localhost:27017/payment", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Server and DB Connected"))
);
