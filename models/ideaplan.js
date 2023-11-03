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
      //menghubungkan ideaplan -> pengguna = many to one = child to parent
      this.belongsTo(models.pengguna, {
        foreignKey: "id_pengguna",
        as: "pengguna",
      });

      //menghubungkan ideaplan -> menu = one to many = parent to child
      this.hasMany(models.menu, {
        foreignKey: "id_menu",
        as: "menu",
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
