"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class biaya_penyusutan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //menghubungkan biaya_penyusutan -> ideaplan
      this.belongsTo(models.ideaplan, {
        foreignKey: "id_ideaplan",
        as: "ideaplan",
      });
    }
  }
  biaya_penyusutan.init(
    {
      id_biaya_penyusutan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_ideaplan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nama_barang: DataTypes.STRING,
      harga_barang: DataTypes.INTEGER,
      waktu_pakai: DataTypes.DATE,
      jenis_waktu: DataTypes.ENUM("harian", "mingguan", "bulanan", "tahunan"),
    },
    {
      sequelize,
      modelName: "biaya_penyusutan",
      tableName: "biaya_penyusutan",
    }
  );
  return biaya_penyusutan;
};
