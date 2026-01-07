const { passCheck } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwtoken");
const { Staff } = require("../models");

class Controller {
  static async home(req, res, next) {
    try {
      res.status(200).json({ message: "Halo Dunia" });
    } catch (error) {
      next(error);
    }
  }
  static async memberPage(req, res, next) {
    try {
      res.status(200).json({ message: "Hai Member" });
    } catch (error) {
      next(error);
    }
  }
  static async adminPage(req, res, next) {
    try {
      res.status(200).json({ message: "Hai Admin" });
    } catch (error) {
      next(error);
    }
  }
  static async getStaffs(req, res, next) {
    try {
      res.status(200).json(await Staff.findAll());
    } catch (error) {
      next(error);
    }
  }
  static async addStaff(req, res, next) {
    try {
      console.log(req.body);
      const newStaff = await Staff.create(req.body);
      res
        .status(200)
        .json({ message: "Data added Succesfully", data: newStaff });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const emp = await Staff.findOne({ where: { username } });
      if (!emp || !passCheck(password, emp.password)) {
        throw { name: "WrongPass" };
      }
      const token = createToken({ stId: emp.id });
      res.status(200).json({
        token,
        emp,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
