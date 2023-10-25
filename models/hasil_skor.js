"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hasil_skor extends Model {
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
  hasil_skor.init(
    {
      id_hasil_skor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nilai_skor: DataTypes.INTEGER,
      saran: DataTypes.STRING,
      id_ideaplan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "hasil_skor",
      tableName: "hasil_skor",
    }
  );
  return hasil_skor;
};
