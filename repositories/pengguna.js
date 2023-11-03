const {
  Sequelize,
  sequelize,
  pengguna
} = require('../models')
const flaverr = require('flaverr');
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');

// const pengguna = require('../models/pengguna');
const library = {}

module.exports = library


library.create = async (data, transaction) => {
  try {
    const { username, email, password, id_role } = data
    const hashPassword = await bcrypt.hash(password, 10)
    const result = await pengguna.create({
      id_pengguna : uuidv4(),
      username,
      email,
      password: hashPassword,
      id_role
    }, { transaction })
    if (!result) {
      throw flaverr('E_FAILED', new Error('Failed to create user'))
    }
    delete result.dataValues.password
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

library.findByUsername = async (username) => {
  try {
    // ambil semua data kecuali password
    const result = await pengguna.findOne({
      where: {
        username
      }
    })
    if (!result) {
      throw flaverr('E_NOT_FOUND', new Error('User not found'))
    }
    // Buang password
    delete result.dataValues.password
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

library.findByEmail = async (email) => {
  try {
    const result = await pengguna.findOne({
      where: {
        email
      }
    })
    if (!result) {
      throw flaverr('E_NOT_FOUND', new Error('User not found'))
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

library.findByID = async (id) => {
  try {
    const result = await pengguna.findByPk(id)
    if (!result) {
      throw flaverr('E_NOT_FOUND', new Error('User not found'))
    }
    delete result.dataValues.password
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

library.login = async (data) => {
  try {
    const { email, password } = data
    const result = await pengguna.findOne({
      where: {
        email,
      }
    })
    if (!result) {
      throw flaverr('E_NOT_FOUND', new Error('User not found'))
    }
    const isValid = await bcrypt.compare(password, result.password)
    if (!isValid) {
      throw flaverr('E_INVALID', new Error('Password invalid'))
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
