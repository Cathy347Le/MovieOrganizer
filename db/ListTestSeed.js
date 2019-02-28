const { List } = require("../models/list");

List.remove({}).then(function() {
  List.create({
    title: "Recent movies",
    description: "Recent movies I want to watch"
  });
  List.create({
    title: "Old movies",
    description: "Old movies I want to watch"
  }).then(Lists => {
    Lists.save(err => console.log(err));
  });
});
