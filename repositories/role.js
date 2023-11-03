const {
  Sequelize,
  sequelize,
  role
} = require('../models')
const flaverr = require('flaverr');
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid')


const library = {}
module.exports = library


library.findAll = async () => {
  try {
    const result = await role.findAll()
    if (!result) {
      throw flaverr('E_NOT_FOUND', new Error('Role not found'))
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
