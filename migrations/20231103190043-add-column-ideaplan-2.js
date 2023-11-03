'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // tambah kolom mentor_id
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn('ideaplan', 'mentor_id', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, { transaction });
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // hapus kolom mentor_id
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeColumn('ideaplan', 'mentor_id', { transaction });
    });
  }
};
