"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pengguna extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //menghubungkan pengguna -> role = one to one = child to parent
      this.belongsTo(models.role, {
        foreignKey: "id_role",
        as: "role",
      });

      //menghubungkan pengguna -> ideplan = one to many = parent to child
      this.hasMany()(models.ideplan, {
        foreignKey: "id_ideplan",
        as: "ideplan",
      });
    }
  }
  pengguna.init(
    {
      id_pengguna: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      id_role: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "pengguna",
      tableName: "pengguna",
    }
  );
  return pengguna;
};
