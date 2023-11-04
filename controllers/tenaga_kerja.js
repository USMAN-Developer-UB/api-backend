const tenagaKerjaRepository = require('../repositories/tenaga_kerja');
const response = require('../utils/response')
const { StatusCodes } = require('http-status-codes')
const flaverr = require('flaverr')
const transactionRepository = require('../repositories/transaction')
const library = {}
module.exports = library

library.create = async (req, res) => {
  try {
    const { body } = req
    const transaction = await transactionRepository.Create()
    if (transaction.success === false) {
      throw flaverr('E_FAILED', new Error('Failed to create transaction'))
    }
    const result = await tenagaKerjaRepository.create(body, transaction.data)
    if (result.success === false) {
      await transactionRepository.Rollback(transaction.data)
      throw flaverr('E_FAILED', new Error(result.err))
    }
    await transactionRepository.Commit(transaction.data)
    return response.success(res, StatusCodes.CREATED, result.result)
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}
