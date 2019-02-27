const { List } = require("../models/list");

module.exports = {
  new: (req, res) => {
    res.send("new list page");
  },
  create: (req, res) => {
    res.redirect("/");
  },
  show: (req, res) => {
    res.send("show list page");
  },
  edit: (req, res) => {
    res.send("edit list page");
  },
  update: (req, res) => {
    res.redirect("/");
  },
  delete: (req, res) => {
    res.redirect("/");
  }
};
