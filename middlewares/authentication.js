const authentification = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization, "<<<<<<<<<");
    if (!authorization) throw { name: "Unauthorized" };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authentification };
