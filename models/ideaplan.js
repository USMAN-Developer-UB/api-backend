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
        foreignKey: "id_ideaplan",
        as: "menu",
      });

      //menghubungkan ideaplan -> biaya_overhead = one to many = parent to child
      this.hasMany(models.biaya_overhead, {
        foreignKey: "id_ideaplan",
        as: "biaya_overhead",
      });

      //menghubungkan ideaplan -> tenaga_kerja = one to many = parent to child
      this.hasMany(models.tenaga_kerja, {
        foreignKey: "id_ideaplan",
        as: "tenaga_kerja",
      });

      this.hasMany(models.jawaban, {
        foreignKey: "id_ideaplan",
        as: "jawaban",
      });

      this.hasMany(models.hpp, {
        foreignKey: "id_ideaplan",
        as: "hpp",
      });

      this.hasMany(models.biaya_penyusutan, {
        foreignKey: "id_ideaplan",
        as: "biaya_penyusutan",
      });

    }
  }
  ideaplan.init(
    {
      id_ideaplan: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      nama_ideaplan: DataTypes.STRING,
      komentar_mentor: DataTypes.STRING,
      nilai_mentor: DataTypes.INTEGER,
      id_pengguna: {
        type: DataTypes.UUID,
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
