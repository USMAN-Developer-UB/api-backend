"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // //menghubungkan role -> pengguna = one to many = parent to child
      // this.hasMany(models.pengguna, {
      //   foreignKey: "id_pengguna",
      //   as: "pengguna",
      // });
    }
  }
  role.init(
    {
      id_role: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nama_role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "role",
      tableName: "role",
    }
  );
  return role;
};
