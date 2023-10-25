"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hpp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //menghubungkan biaya_overhead -> ideaplan
      this.belongsTo(models.ideaplan, {
        foreignKey: "id_ideaplan",
        as: "ideaplan",
      });
    }
  }
  hpp.init(
    {
      id_hpp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama_menu: DataTypes.STRING,
      harga_menu_sebelum: DataTypes.DOUBLE,
      persen_laba: DataTypes.INTEGER,
      harga_menu_setelah: DataTypes.DOUBLE,
      id_ideaplan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "hpp",
      tableName: "hpp",
    }
  );
  return hpp;
};
