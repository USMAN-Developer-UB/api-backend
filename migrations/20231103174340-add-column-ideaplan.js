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
    await queryInterface.sequelize.transaction(async (transaction) => {
      // Add column komentar_mentor, nilai_mentor
      await queryInterface.addColumn('ideaplan', 'komentar_mentor', {
        type: Sequelize.STRING,
        allowNull: true,
      }, { transaction });
      await queryInterface.addColumn('ideaplan', 'nilai_mentor', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }, { transaction });
      // hapus kolom nama_bisnis
      await queryInterface.removeColumn('ideaplan', 'nama_bisnis', { transaction });
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.sequelize.transaction(async (transaction) => {
      // Hapus kolom komentar_mentor, nilai_mentor
      await queryInterface.removeColumn('ideaplan', 'komentar_mentor', { transaction });
      await queryInterface.removeColumn('ideaplan', 'nilai_mentor', { transaction });
      // Tambah kolom nama_bisnis
      await queryInterface.addColumn('ideaplan', 'nama_bisnis', {
        type: Sequelize.STRING,
        allowNull: true,
      }, { transaction });
    });
  }
};
