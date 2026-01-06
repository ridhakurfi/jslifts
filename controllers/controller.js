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
  static async 
}

module.exports = Controller;
