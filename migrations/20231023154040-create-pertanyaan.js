"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pertanyaan", {
      id_pertanyaan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pertanyaan: {
        type: Sequelize.STRING,
      },
      jawaban: {
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
    await queryInterface.dropTable("pertanyaan");
  },
};
