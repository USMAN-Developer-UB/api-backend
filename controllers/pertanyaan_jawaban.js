const pertanyaanJawabanRepository = require('../repositories/pertanyaan_jawaban');
const response = require('../utils/response')
const { StatusCodes } = require('http-status-codes')
const transactionRepository = require('../repositories/transaction')
const jwtMiddleware = require('../middleware/jwt')
const flaverr = require('flaverr')

const library = {}
module.exports = library

library.createJawaban = async (req, res) => {
  try {
    const transaction = await transactionRepository.Create()
    if (transaction.success === false) {
      throw flaverr('E_FAILED', new Error('Failed to create transaction'))
    }
    const result = await pertanyaanJawabanRepository.createJawaban({ ...req.body }, transaction.data)
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

library.showPertanyaanByTipe = async (req, res) => {
  try {
    const result = await pertanyaanJawabanRepository.showPertanyaanByTipe(req.params.tipe)
    if (result.success === false) {
      throw flaverr('E_FAILED', new Error(result.err))
    }
    return response.success(res, StatusCodes.OK, result.result)
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}
