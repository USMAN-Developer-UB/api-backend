"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class biaya_overhead extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // ini adalah blok untuk menghubungkan antar model/table
      /** one to one -> hasOne(), belongsTo()
       *  one to many-> hasMany(), belongsToMany()
       *
       * has -> itu dipakai ketika menghubungkan parent ke child
       * belong -> itu dipakai ketika menghubungkan child ke parent
       */

      //menghubungkan biaya_overhead -> ideaplan
      this.belongsTo(models.ideaplan, {
        foreignKey: "id_ideaplan",
        as: "ideaplan",
      });
    }
  }
  biaya_overhead.init(
    {
      id_biaya_overhead: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_ideaplan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      tipe_biaya: DataTypes.STRING,
      nama_biaya: DataTypes.STRING,
      metode_bayar: DataTypes.STRING,
      biaya: DataTypes.DOUBLE,
      jenis_waktu: DataTypes.ENUM("harian", "mingguan", "bulanan", "tahunan"),
    },
    {
      sequelize,
      modelName: "biaya_overhead",
      tableName: "biaya_overhead",
    }
  );
  return biaya_overhead;
};
