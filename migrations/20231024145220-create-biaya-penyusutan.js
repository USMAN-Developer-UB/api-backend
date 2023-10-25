"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("biaya_penyusutan", {
      id_biaya_penyusutan: {
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
      nama_barang: {
        type: Sequelize.STRING,
      },
      harga_barang: {
        type: Sequelize.INTEGER,
      },
      waktu_pakai: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("biaya_penyusutan");
  },
};
