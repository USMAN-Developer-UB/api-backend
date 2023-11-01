const {
  idea_plan,
  Sequelize,
  sequelize
} = require('../models')
const flaverr = require('flaverr');
const bcrypt = require('bcryptjs')

const library = {}

module.exports = library

library.create = async (data, user, transaction) => {
  try {
    const { nama_ideaplan, nama_bisnis  } = data
    const result = await idea_plan.create({
      id_ideaplan : uuidv4(),
      ...data,
      id_pengguna: user.id
    }, { transaction })
    if (!result) {
      throw flaverr('E_FAILED', new Error('Failed to create idea plan'))
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
