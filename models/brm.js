"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class brm extends Model {
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
  brm.init(
    {
      id_brm: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pertanyaan_brm: DataTypes.STRING,
      jawaban_brm: DataTypes.STRING,
      id_ideaplan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "brm",
      tableName: "brm",
    }
  );
  return brm;
};
