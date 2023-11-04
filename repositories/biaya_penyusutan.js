const {
  ideaplan,
  Sequelize,
  menu,
  biaya_penyusutan
} = require('../models')
const flaverr = require('flaverr');
const { v4: uuidv4 } = require('uuid')


const library = {}
module.exports = library

library.create = async (data, transaction) => {
  const { biaya_penyusutans } = data
  biaya_penyusutans.forEach(async (item) => {
    item.id_biaya_penyusutan = uuidv4()
  })
  try {
    await biaya_penyusutan.bulkCreate(biaya_penyusutans, { transaction })
    return {
      success: true,
      result: {
        biaya_penyusutans
      }
    }
  } catch (err) {
    return {
      success: false,
      err
    }
  }
}
