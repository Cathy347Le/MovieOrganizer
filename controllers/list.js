const { List } = require("../models/list");

module.exports = {
  new: (req, res) => {
    res.render("list/new");
  },
  create: (req, res) => {
    const { title, description } = req.body;
    List.create({
      title,
      description
    }).then(list => {
      res.redirect(`list/${list.id}`);
    });
  },
  show: (req, res) => {
    List.findById(req.params.id).then(list => {
      res.render("list/show", { list });
    });
  },
  edit: (req, res) => {
    List.findById(req.params.id).then(list => {
      res.render("list/edit", { list });
    });
  },
  update: (req, res) => {
    res.redirect("/");
  },
  delete: (req, res) => {
    res.redirect("/");
  }
};
