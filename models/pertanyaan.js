"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pertanyaan extends Model {
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

      //menghubungkan pertanyaan -> jawaban = one to many = parent to child
      this.hasMany(models.jawaban, {
        foreignKey: "id_jawaban",
        as: "jawaban",
      });
    }
  }
  pertanyaan.init(
    {
      id_pertanyaan: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      pertanyaan: DataTypes.STRING,
      jenis_pertanyaan: DataTypes.STRING,
      // id_ideaplan: {
      //   type: DataTypes.UUID,
      //   primaryKey: true,
      // },
    },
    {
      sequelize,
      modelName: "pertanyaan",
      tableName: "pertanyaan",
    }
  );
  return pertanyaan;
};
