"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //menghubungkan role -> pengguna =
      this.hasOne(models.pengguna, {
        foreignKey: "id_pengguna",
        as: "pengguna",
      });
    }
  }
  role.init(
    {
      id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "role",
      tableName: "role",
    }
  );
  return role;
};
