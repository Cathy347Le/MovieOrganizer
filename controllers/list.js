const { List } = require("../models/list");

module.exports = {
  new: (req, res) => {
    res.render("list/new");
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
