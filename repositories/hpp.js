const { ideaplan, Sequelize, hpp } = require("../models");
const flaverr = require("flaverr");
const { v4: uuidv4 } = require("uuid");

const library = {};
module.exports = library;

library.create = async (data, transaction) => {
  const { hpps } = data;
  hpps.forEach(async (item) => {
    item.id_hpp = uuidv4();
  });
  try {
    await hpp.bulkCreate(hpps, { transaction });
    return {
      success: true,
      result: {
        hpps,
      },
    };
  } catch (err) {
    return {
      success: false,
      err,
    };
  }
};
