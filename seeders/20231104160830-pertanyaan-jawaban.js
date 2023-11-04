"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "pertanyaan",
      [
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang bikin produk atau layanan kamu beda dan keren dari yang lain?",
          jenis_pertanyaan: "strengths",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang bikin produk atau layanan kamu beda dan keren dari yang lain?",
          jenis_pertanyaan: "strengths",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang bikin pelanggan kamu seneng banget sama bisnis kamu?",
          jenis_pertanyaan: "strengths",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang bikin bisnis kamu juara dalam persaingan?",
          jenis_pertanyaan: "strengths",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang bikin bisnis kamu susah banget ditiru sama orang lain?",
          jenis_pertanyaan: "strengths",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang jadi aset terbesar di bisnis kamu?",
          jenis_pertanyaan: "strengths",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang bisa diperbaiki dari produk atau layanan yang kamu tawarin?",
          jenis_pertanyaan: "weaknesses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang bikin pelanggan nggak puas sama bisnis kamu?",
          jenis_pertanyaan: "weaknesses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa kelemahan utama bisnis kamu pas bersaing sama yang lain?",
          jenis_pertanyaan: "weaknesses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: " Apa yang bisa dicontek sama pesaing dari bisnis kamu?",
          jenis_pertanyaan: "weaknesses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang dianggap sebagai titik lemah terbesar dalam bisnis kamu?",
          jenis_pertanyaan: "weaknesses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Tren pasar apa yang dapat menguntungkan bisnis Anda?",
          jenis_pertanyaan: "opportunities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Teknologi baru apa yang dapat dimanfaatkan oleh bisnis Anda?",
          jenis_pertanyaan: "opportunities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Perubahan perilaku konsumen apa yang dapat dimanfaatkan oleh bisnis Anda?",
          jenis_pertanyaan: "opportunities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Aturan baru apa yang dapat menguntungkan bisnis Anda?",
          jenis_pertanyaan: "opportunities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Peluang pasar apa yang masih belum dijajah oleh pesaing?",
          jenis_pertanyaan: "opportunities",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Bagaimana fluktuasi mata uang dapat mempengaruhi kinerja keuangan bisnis kami?",
          jenis_pertanyaan: "threats",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Bagaimana perubahan kebijakan pemerintah terkait pajak dapat berdampak negatif pada bisnis kami?",
          jenis_pertanyaan: "threats",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Bagaimana isu-isu lingkungan dan keberlanjutan dapat mempengaruhi reputasi bisnis kami?",
          jenis_pertanyaan: "threats",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Bagaimana perkembangan teknologi baru dalam industri kami dapat mengancam eksistensi bisnis kami?",
          jenis_pertanyaan: "threats",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Bagaimana kemunculan pesaing baru dengan produk atau layanan yang lebih inovatif dapat menjadi ancaman bagi bisnis kami?",
          jenis_pertanyaan: "threats",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
