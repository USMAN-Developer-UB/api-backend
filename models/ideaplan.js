"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ideaplan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //menghubungkan ideaplan -> pengguna
      this.hasMany(models.pengguna, {
        foreignKey: "id_penggunan",
        as: "pengguna",
      });
    }
  }
  ideaplan.init(
    {
      id_ideaplan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_ideaplan: DataTypes.STRING,
      nama_bisnis: DataTypes.STRING,
      id_pengguna: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "ideaplan",
      tableName: "ideaplan",
    }
  );
  return ideaplan;
};