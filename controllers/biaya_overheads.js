const biayaOverheadRepository = require('../repositories/biaya_overhead');
const response = require('../utils/response')
const { StatusCodes } = require('http-status-codes')
const transactionRepository = require('../repositories/transaction')
const flaverr = require('flaverr')

const library = {}
module.exports = library

library.create = async (req, res) => {
  try {
    const transaction = await transactionRepository.Create()
    if (transaction.success === false) {
      throw flaverr('E_FAILED', new Error('Failed to create transaction'))
    }
    const newBiayaOverhead = await biayaOverheadRepository.create({ ...req.body }, req.user.id, transaction.data)
    if (newBiayaOverhead.success === false) {
      await transactionRepository.Rollback(transaction.data)
      throw flaverr('E_FAILED', new Error(newBiayaOverhead.err))
    }
    await transactionRepository.Commit(transaction.data)
    return response.success(res, StatusCodes.CREATED, newBiayaOverhead.result)
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}
