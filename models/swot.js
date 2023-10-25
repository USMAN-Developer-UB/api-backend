"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class swot extends Model {
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
  swot.init(
    {
      id_swot: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      strength: DataTypes.STRING,
      weakness: DataTypes.STRING,
      opportunity: DataTypes.STRING,
      thread: DataTypes.STRING,
      id_ideaplan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "swot",
      tableName: "swot",
    }
  );
  return swot;
};
