const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "WrongPass":
      res.status(400).json({ message: "Invalid Username of Pass" });
      break;
    case "Unauthorized":
      res.status(400).json({ message: "Please login to continue" });
      break;
    default:
      console.log(err);
      res.status(500).json({ message: "Internal Error in Handler" });
      break;
  }
};

module.exports = { errorHandler };
