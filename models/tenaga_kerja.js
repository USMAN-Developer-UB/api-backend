"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tenaga_kerja extends Model {
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
  tenaga_kerja.init(
    {
      id_swot: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_ideaplan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      tipe: DataTypes.ENUM("Individu", "Grup"),
      posisi: DataTypes.STRING,
      jumlah: DataTypes.INTEGER,
      gaji_posisi: DataTypes.DOUBLE,
      waktu_gaji: DataTypes.ENUM("harian", "mingguan", "bulanan", "tahunan"),
    },
    {
      sequelize,
      modelName: "tenaga_kerja",
      tableName: "tenaga_kerja",
    }
  );
  return tenaga_kerja;
};
