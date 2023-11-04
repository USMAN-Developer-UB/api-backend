const {
  ideaplan,
  Sequelize,
  menu,
  biaya_overhead
} = require('../models')
const flaverr = require('flaverr');
const { v4: uuidv4 } = require('uuid')

const library = {}
module.exports = library

library.create = async (data, transaction) => {
  const { biaya_overheads } = data
  biaya_overheads.forEach(async (item) => {
    item.id_biaya_overhead = uuidv4()
  })
  try {
    await biaya_overhead.bulkCreate(biaya_overheads, { transaction })
    return {
      success: true,
      result: {
        biaya_overheads
      }
    }
  } catch (err) {
    return {
      success: false,
      err
    }
  }
}
