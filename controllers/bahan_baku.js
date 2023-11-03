const bahanBakuRepository = require('../repositories/bahan_baku');
const response = require('../utils/response')
const { StatusCodes } = require('http-status-codes')
const transactionRepository = require('../repositories/transaction')
const flaverr = require('flaverr')

const library = {}
module.exports = library

library.create = async (req, res) => {
  try {
    const id_ideaplan = req.params.id_ideaplan
    const transaction = await transactionRepository.Create()
    if (transaction.success === false) {
      throw flaverr('E_FAILED', new Error('Failed to create transaction'))
    }
    const newBahanBaku = await bahanBakuRepository.create({ ...req.body }, id_ideaplan, transaction.data)
    if (newBahanBaku.success === false) {
      await transactionRepository.Rollback(transaction.data)
      throw flaverr('E_FAILED', new Error(newBahanBaku.err))
    }
    await transactionRepository.Commit(transaction.data)
    return response.success(res, StatusCodes.CREATED, newBahanBaku.result)
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}
