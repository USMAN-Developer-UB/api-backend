const {
  jawaban,
  pertanyaan,
  Sequelize,
  sequelize
} = require('../models')
const flaverr = require('flaverr');
const { v4: uuidv4 } = require('uuid')

const library = {}
module.exports = library

library.createJawaban = async (data, transaction) => {
  try {
    const { jawabans } = data
    jawabans.forEach(async (item) => {
      item.id_jawaban = uuidv4()
    })
    await jawaban.bulkCreate(jawabans, { transaction })
    return {
      success: true,
      result: {
        jawabans
      }
    }
  }
  catch (err) {
    return {
      success: false,
      err
    }
  }
}

library.showPertanyaanByTipe = async (tipe) => {
  try {
    const result = await pertanyaan.findAll({
      where: {
        jenis_pertanyaan: tipe
      }
    })
    if (!result) {
      throw flaverr('E_FAILED', new Error('Failed to show pertanyaan'))
    }
    return {
      success: true,
      result
    }
  } catch (err) {
    return {
      success: false,
      err
    }
  }
}
