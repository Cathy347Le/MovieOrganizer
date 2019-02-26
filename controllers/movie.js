module.exports = {
  new: (req, res) => {
    console.log("new movie");
  },
  create: (req, res) => {
    console.log("create movie");
  },
  show: (req, res) => {
    console.log("show movie");
  },
  delete: (req, res) => {
    console.log("delete movie");
  }
};
