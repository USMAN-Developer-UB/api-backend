const roleRepository = require('../repositories/role');
const response = require('../utils/response')
const { StatusCodes } = require('http-status-codes')
const transactionRepository = require('../repositories/transaction')
const jwtMiddleware = require('../middleware/jwt')
const flaverr = require('flaverr')

const library = {}
module.exports = library

library.findAll = async (req, res) => {
  try {
    const role = await roleRepository.findAll()
    if (role.success === false) {
      throw flaverr('E_FAILED', new Error('Failed to get role'))
    }
    return response.success(res, StatusCodes.OK, role.result)
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}
