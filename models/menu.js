"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //menghubungkan menu -> ideaplan = many to one = child to parent
      this.belongsTo(models.ideaplan, {
        foreignKey: "id_ideaplan",
        as: "ideaplan",
      });

      // //menghubungkan menu -> bahan_menu = one to many = parent to child
      // this.hasMany(models.bahan_menu, {
      //   foreignKey: "id_bahan_menu",
      //   as: "bahan_menu",
      // });
    }
  }
  menu.init(
    {
      id_menu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_menu: DataTypes.STRING,
      hari: DataTypes.STRING,
      porsi: DataTypes.STRING,
      id_ideaplan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "menu",
      tableName: "menu",
    }
  );
  return menu;
};
