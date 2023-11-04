const {
  Sequelize,
  tenaga_kerja
} = require('../models')
const flaverr = require('flaverr');
const { v4: uuidv4 } = require('uuid')
const library = {}
module.exports = library

library.create = async (data, transaction) => {
  try {
    const {tenaga_kerjas} = data
    // Mapping data masukkan id_tenaga_kerja
    tenaga_kerjas.forEach(item => {
      item.id_tenaga_kerja = uuidv4()
    })
    const result = await tenaga_kerja.bulkCreate(tenaga_kerjas, {transaction})
    return {
      success: true,
      result
    }
  }
  catch (err) {
    return {
      success: false,
      err
    }
  }
}
