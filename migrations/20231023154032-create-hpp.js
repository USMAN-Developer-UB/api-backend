"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hpp", {
      id_hpp: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_menu: {
        type: Sequelize.STRING,
      },
      harga_menu_sebelum: {
        type: Sequelize.INTEGER,
      },
      persen_laba: {
        type: Sequelize.INTEGER,
      },
      harga_menu_setelah: {
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
    await queryInterface.dropTable("hpp");
  },
};
