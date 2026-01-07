const adminOnly = async (req, res, next) => {
  try {
    if (req.staff === "admin") {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { adminOnly };
