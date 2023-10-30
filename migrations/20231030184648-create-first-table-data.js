'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.UUID });
     */
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable("role", {
        id_role: {
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        nama_role: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },

      }, { transaction });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable("pengguna", {
        id_pengguna: {
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        username: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
        },
        id_role: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "role",
            key: "id_role",
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
      }, { transaction });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable("ideaplan", {
        id_ideaplan: {
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        nama_ideaplan: {
          type: Sequelize.STRING,
        },
        nama_bisnis: {
          type: Sequelize.STRING,
        },
        id_pengguna: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "pengguna",
            key: "id_pengguna",
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
      }, { transaction });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable("menu", {
        id_menu: {
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        nama_menu: {
          type: Sequelize.STRING,
        },
        hari: {
          type: Sequelize.STRING,
        },
        porsi: {
          type: Sequelize.STRING,
        },
        id_ideaplan: {
          type: Sequelize.UUID,
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
      }, { transaction });
    });
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("bahan_menu", {
        id_bahan_menu: {
          allowNull: false,
          type: Sequelize.UUID, // Mengubah tipe kolom menjadi UUID
          defaultValue: Sequelize.UUIDV4, // Menambahkan nilai default UUID menggunakan Sequelize.UUIDV4
          primaryKey: true,
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
          type: Sequelize.UUID,
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
      }, { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("tenaga_kerja", {
        id_tenaga_kerja: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        id_ideaplan: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: "ideaplan",
            key: "id_ideaplan",
          },
        },
        tipe: {
          type: Sequelize.STRING,
        },
        posisi: {
          type: Sequelize.STRING,
        },
        jumlah: {
          type: Sequelize.INTEGER,
        },
        gaji_posisi: {
          type: Sequelize.DOUBLE,
        },
        waktu_gaji: {
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
      }, { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("biaya_penyusutan", {
        id_biaya_penyusutan: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        id_ideaplan: {
          type: Sequelize.UUID,
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
          type: Sequelize.DOUBLE,
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
      }, { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("biaya_overhead", {
        id_biaya_overhead: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        id_ideaplan: {
          type: Sequelize.UUID,
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
      }, { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("hpp", {
        id_hpp: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        nama_menu: {
          type: Sequelize.STRING,
        },
        harga_menu_sebelum: {
          type: Sequelize.DOUBLE,
        },
        persen_laba: {
          type: Sequelize.INTEGER,
        },
        harga_menu_setelah: {
          type: Sequelize.DOUBLE,
        },
        id_ideaplan: {
          type: Sequelize.UUID,
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
      }, { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("pertanyaan", {
        id_pertanyaan: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        pertanyaan: {
          type: Sequelize.STRING,
        },
        jawaban: {
          type: Sequelize.STRING,
        },
        id_ideaplan: {
          type: Sequelize.UUID,
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
      }, { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("swot", {
        id_swot: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        strength: {
          type: Sequelize.STRING,
        },
        weakness: {
          type: Sequelize.STRING,
        },
        opportunity: {
          type: Sequelize.STRING,
        },
        thread: {
          type: Sequelize.STRING,
        },
        id_ideaplan: {
          type: Sequelize.UUID,
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
      }, { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("hasil_skor", {
        id_hasil_skor: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        nilai_skor: {
          type: Sequelize.INTEGER,
        },
        saran: {
          type: Sequelize.STRING,
        },
        id_ideaplan: {
          type: Sequelize.UUID,
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
      }, { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable("brm", {
        id_brm: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID,
        },
        pertanyaan_brm: {
          type: Sequelize.STRING,
        },
        jawaban_brm: {
          type: Sequelize.STRING,
        },
        id_ideaplan: {
          type: Sequelize.UUID,
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
      }, {transaction : t});
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable("role", { transaction });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable("pengguna", { transaction });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable("ideaplan", { transaction });
    });
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable("menu", { transaction });
    });
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("bahan_menu", { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("tenaga_kerja", { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("biaya_penyusutan", { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("biaya_overhead", { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("hpp", { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("pertanyaan", { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("swot", { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("hasil_skor", { transaction: t });
    })
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("brm", { transaction: t });
    })

  }
};
