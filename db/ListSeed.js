const { List } = require("../models/list");
const { Movie } = require("../models/list");

List.find({}).remove(() => {
  Movie.find({}).remove(() => {
    let RecentList = List.create({
      title: "Recent movies",
      description: "Recent movies I want to watch"
    }).then(list => {
      Promise.all([
        Movie.create({
          title: "Aquaman",
          genre: "Action",
          year: 2018,
          rating: 7.3
        }).then(movie => {
          list.movies.push(movie);
        }),
        Movie.create({
          title: "Bohemian Rhapsody",
          genre: "Drama",
          year: 2018,
          rating: 8.1
        }).then(movie => {
          list.movies.push(movie);
        }),
        Movie.create({
          title: "A Star is Born",
          genre: "Drama",
          year: 2018,
          rating: 7.9
        }).then(movie => {
          list.movies.push(movie);
        })
      ]).then(() => {
        list.save(err => console.log(err));
      });
    });
    let OldieList = List.create({
      title: "Old movies",
      description: "Old movies I want to watch"
    }).then(list => {
      Promise.all([
        Movie.create({
          title: "Love Actually",
          genre: "Romance",
          year: 2003,
          rating: 7.5
        }).then(movie => {
          list.movies.push(movie);
        }),
        Movie.create({
          title: "Jack Frost",
          genre: "Drama",
          year: 1998,
          rating: 5.3
        }).then(movie => {
          list.movies.push(movie);
        })
      ]).then(() => {
        list.save(err => console.log(err));
      });
    });
  });
});
