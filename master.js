//Install express and create and instance of express
//Require dependencies
//Apply dependencies to instance of express
//Create a port for server to listen to request

const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(require("./routes/index"));

app.listen(7000, () => console.log("listening on port 7000"));
