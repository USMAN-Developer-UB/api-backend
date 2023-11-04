const { ideaplan, tenaga_kerja, bahan_menu, biaya_overhead, menu, Sequelize, sequelize } = require("../models");
const flaverr = require("flaverr");
const { v4: uuidv4 } = require("uuid");

const library = {};

module.exports = library;

library.create = async (data, user, transaction) => {
  try {
    const result = await ideaplan.create(
      {
        id_ideaplan: uuidv4(),
        ...data,
        id_pengguna: user,
      },
      { transaction }
    );
    if (!result) {
      throw flaverr("E_FAILED", new Error("Failed to create idea plan"));
    }
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      err,
    };
  }
};

library.findByUser = async (user) => {
  try {
    const result = await ideaplan.findOne({
      where: {
        id_pengguna: user,
      },
      include: [
        {
          model: tenaga_kerja,
          as: "tenaga_kerja",
        },
        {
          model: menu,
          as: "menu",
          include: [
            {
              model: bahan_menu,
              as: "bahan_menu",
            },
          ],
        },
        {
          model: biaya_overhead,
          as: "biaya_overhead",
        },
      ],
    });
    if (!result) {
      throw flaverr("E_NOT_FOUND", new Error("Idea plan not found"));
    }
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      err,
    };
  }
};

library.findByMentor = async (user) => {
  try {
    const result = await ideaplan.findOne({
      where: {
        id_mentor: user,
      },
      include: [
        {
          model: tenaga_kerja,
          as: "tenaga_kerja",
        },
        {
          model: menu,
          as: "menu",
          include: [
            {
              model: bahan_menu,
              as: "bahan_menu",
            },
          ],
        },
        {
          model: biaya_overhead,
          as: "biaya_overhead",
        },
      ],
    });
    if (!result) {
      throw flaverr("E_NOT_FOUND", new Error("Idea plan not found"));
    }
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      err,
    };
  }
};

library.findAll = async () => {
  try {
    const result = await ideaplan.findAll();
    if (!result) {
      throw flaverr("E_NOT_FOUND", new Error("Idea plan not found"));
    }
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      err,
    };
  }
};

library.findByIdUser = async (id_ideaplan) => {
  try {
    const result = await ideaplan.findOne({
      where: {
        id_ideaplan: id_ideaplan,
      },
      include: [
        {
          model: tenaga_kerja,
          as: "tenaga_kerja",
        },
        {
          model: hasil_skor,
          as: "hasil_skor",
        },
        {
          model: jawaban,
          as: "jawaban",
          include: [
            {
              model: pertanyaan,
              as: "pertanyaan",
            },
          ],
        },
        {
          model: hpp,
          as: "hpp",
        },
        {
          model: biaya_penyusutan,
          as: "biaya_penyusutan",
        },
        {
          model: menu,
          as: "menu",
          include: [
            {
              model: bahan_menu,
              as: "bahan_menu",
            },
          ],
        },
        {
          model: biaya_overhead,
          as: "biaya_overhead",
        },
      ],
    });
    if (!result) {
      throw flaverr("E_NOT_FOUND", new Error("Idea plan not found"));
    }
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      err,
    };
  }
};

library.findByIdMentor = async (id_ideaplan) => {
  try {
    const result = await ideaplan.findOne({
      where: {
        id_ideaplan: id_ideaplan,
      },
      include: [
        {
          model: tenaga_kerja,
          as: "tenaga_kerja",
        },
        {
          model: hasil_skor,
          as: "hasil_skor",
        },
        {
          model: jawaban,
          as: "jawaban",
          include: [
            {
              model: pertanyaan,
              as: "pertanyaan",
            },
          ],
        },
        {
          model: hpp,
          as: "hpp",
        },
        {
          model: biaya_penyusutan,
          as: "biaya_penyusutan",
        },
        {
          model: menu,
          as: "menu",
          include: [
            {
              model: bahan_menu,
              as: "bahan_menu",
            },
          ],
        },
        {
          model: biaya_overhead,
          as: "biaya_overhead",
        },
      ],
    });
    if (!result) {
      throw flaverr("E_NOT_FOUND", new Error("Idea plan not found"));
    }
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      err,
    };
  }
};
