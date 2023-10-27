"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bahan_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //menghubungkan bahan_menu -> menu = many to one = child to parent
      this.belongsToMany(models.menu, {
        foreignKey: "id_menu",
        as: "menu",
      });
    }
  }
  bahan_menu.init(
    {
      id_bahan_menu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_bahan: DataTypes.STRING,
      harga_bahan: DataTypes.DOUBLE,
      berat_bahan: DataTypes.DOUBLE,
      jenis_berat: DataTypes.ENUM("kg", "gr", "L", "mL"),
      id_menu: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bahan_menu",
      tableName: "bahan_menu",
    }
  );
  return bahan_menu;
};
