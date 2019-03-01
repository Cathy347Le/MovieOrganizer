//Install express and create and instance of express
//Require dependencies
//Apply dependencies to instance of express
//Create a port for server to listen to request

const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");
const hbs = require("hbs");

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use(require("./routes/index"));

app.listen(7000, () => console.log("listening on port 7000"));

// app.set("port", process.env.PORT || 3001);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });
