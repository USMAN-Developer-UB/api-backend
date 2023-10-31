const penggunaRepository = require('../repositories/pengguna');
const response = require('../utils/response')
const { StatusCodes } = require('http-status-codes')
const transactionRepository = require('../repositories/transaction')
const jwtMiddleware = require('../middleware/jwt')


const library = {}
module.exports = library

library.create = async (req, res) => {
  try {
    const transaction = await transactionRepository.Create()
    if (transaction.success === false) {
      throw flaverr('E_FAILED', new Error('Failed to create transaction'))
    }
    const newUser = penggunaRepository.create({ ...req.body }, transaction.data)
    if (newUser.success === false) {
      await transactionRepository.Rollback(transaction.data)
      throw flaverr('E_FAILED', new Error('Failed to create user'))
    }
    await transactionRepository.Commit(transaction.data)
    const token = jwtMiddleware.generateToken(newUser.result.id)
    if (!token) {
      throw flaverr('E_FAILED', new Error('Failed to generate token'))
    }
    return response.success(res, StatusCodes.CREATED, {
      token,
      user: newUser.result
    })
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}
