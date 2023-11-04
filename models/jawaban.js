"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class jawaban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //menghubungkan jawaban -> pertanyaan = one to many = parent to child
      this.hasMany(models.pertanyaan, {
        foreignKey: "id_pertanyaan",
        as: "pertanyaan",
      });

      //menghubungkan jawaban -> ideaplan  = many to one = child to parent
      this.belongsTo(models.ideaplan, {
        foreignKey: "id_ideaplan",
        as: "ideaplan",
      });
    }
  }
  jawaban.init(
    {
      id_jawaban: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      jawaban: DataTypes.STRING,
      id_pertanyaan: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      id_ideaplan: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "jawaban",
      tableName: "jawaban",
    }
  );
  return jawaban;
};
