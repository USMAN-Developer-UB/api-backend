"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("biaya_overhead", {
      id_biaya_overhead: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_ideaplan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ideaplan",
          key: "id_ideaplan",
        },
      },
      tipe_biaya: {
        type: Sequelize.STRING,
      },
      nama_biaya: {
        type: Sequelize.STRING,
      },
      metode_bayar: {
        type: Sequelize.STRING,
      },
      biaya: {
        type: Sequelize.DOUBLE,
      },
      jenis_waktu: {
        type: Sequelize.ENUM("harian", "bulanan", "tahunan"),
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
    await queryInterface.dropTable("biaya_overhead");
  },
};
