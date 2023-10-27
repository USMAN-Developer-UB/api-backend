"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bahan_menu", {
      id_bahan_menu: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_bahan: {
        type: Sequelize.STRING,
      },
      harga_bahan: {
        type: Sequelize.DOUBLE,
      },
      berat_bahan: {
        type: Sequelize.DOUBLE,
      },
      jenis_berat: {
        type: Sequelize.ENUM("kg", "gr", "L", "mL"),
      },
      id_menu: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "menu",
          key: "id_menu",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("bahan_menu");
  },
};
