"use strict";
const { Model } = require("sequelize");
const { passHide } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staff.init(
    {
      username: { type: DataTypes.STRING, validate: { len: [5, 255] } },
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: function (user) {
          user.password = passHide(user.password);
        },
      },
      sequelize,
      modelName: "Staff",
    }
  );
  return Staff;
};
