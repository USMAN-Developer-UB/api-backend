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
      this.hasOne(models.menu, {
        foreignKey: "id_menu",
        as: "menu",
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
