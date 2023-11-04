"use strict";

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
          pertanyaan: "Siapa aja yang jadi langganan produk kamu?",
          jenis_pertanyaan: "tentang-segmen-pelanggan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Kebutuhan dan maunya apa sih yang mereka pengen?",
          jenis_pertanyaan: "tentang-segmen-pelanggan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Mereka suka nongkrong dimana dan gimana sih kelakuannya?",
          jenis_pertanyaan: "tentang-segmen-pelanggan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Ciri-ciri mereka tuh kayak gimana, dari umur sampe hobinya?",
          jenis_pertanyaan: "tentang-segmen-pelanggan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa sih yang bikin produk kamu keren banget buat pelanggan?",
          jenis_pertanyaan: "tentang-tawaran-nilai",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa yang bedain produk atau layanan kamu dari yang lain?",
          jenis_pertanyaan: "tentang-tawaran-nilai",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Buat pelanggan, apa untungnya pake produk atau layanan kamu?",
          jenis_pertanyaan: "tentang-tawaran-nilai",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Gimana sih caranya kamu nyamperin pelanggan?",
          jenis_pertanyaan: "tentang-saluran",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Jualan produk atau layanan kamu gimana caranya?",
          jenis_pertanyaan: "tentang-saluran",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Biar pelanggan dapetin produk atau layanan kamu, caranya gimana?",
          jenis_pertanyaan: "tentang-saluran",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Hubungan apa sih yang kamu pengen bangun sama pelanggan?",
          jenis_pertanyaan: "tentang-hubungan-dengan-pelanggan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Gimana sih caranya biar pelanggan betah terus sama kamu?",
          jenis_pertanyaan: "tentang-hubungan-dengan-pelanggan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Buat dapetin saran dari pelanggan, caranya gimana?",
          jenis_pertanyaan: "tentang-hubungan-dengan-pelanggan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Duit kamu dapetnya dari mana aja sih?",
          jenis_pertanyaan: "tentang-sumber-pendapatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Berapa sih harganya kalo beli produk atau layanan kamu?",
          jenis_pertanyaan: "tentang-sumber-pendapatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Cara bayarnya gimana sih, macem-macem atau cuma satu?",
          jenis_pertanyaan: "tentang-sumber-pendapatan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa aja yang harus ada buat jalanin bisnis kamu? Aset itu bisa bentuk barang, kepintaran, orang, atau duit.",
          jenis_pertanyaan: "tentang-sumber-daya-utama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Apa aja yang harus kamu lakuin biar produk atau layanan kamu bisa jalan? Mulai dari bikin, promosi, jualan, sampe ngelayanin pelanggan.",
          jenis_pertanyaan: "tentang-sumber-kegiatan-utama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Siapa aja yang jadi kaki tangan utama buat bisnis kamu? Bisa supplier, penjual, atau agen deh.",
          jenis_pertanyaan: "tentang-mitra-utama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_pertanyaan: uuidv4(),
          pertanyaan: "Biaya paling gede buat jalananin bisnis kamu itu apa aja? Mulai dari bikin, promosi, sampe jualan.",
          jenis_pertanyaan: "tentang-struktur-biaya",
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
