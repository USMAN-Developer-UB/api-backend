"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hasil_skor", {
      id_hasil_skor: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nilai_skor: {
        type: Sequelize.INTEGER,
      },
      saran: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("hasil_skor");
  },
};
