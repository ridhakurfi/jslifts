const { clarifyToken } = require("../helpers/jwtoken");
const { Staff } = require("../models");
const authentification = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw { name: "Unauthorized" };
    const [type, token] = authorization.split(" ");
    if (type !== "Bearer") throw { name: "Unauthorized" };
    const content = clarifyToken(token);
    const staff = await Staff.findByPk(content.stId);
    if (!staff) throw {name:"Unauthorized"}
    req.staff = staff.role
    console.log(req.staff);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authentification };
