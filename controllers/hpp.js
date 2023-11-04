const hppRepository = require("../repositories/hpp");
const response = require("../utils/response");
const { StatusCodes } = require("http-status-codes");
const transactionRepository = require("../repositories/transaction");
const flaverr = require("flaverr");

const library = {};
module.exports = library;

library.create = async (req, res) => {
  try {
    const transaction = await transactionRepository.Create();
    if (transaction.success === false) {
      throw flaverr("E_FAILED", new Error("Failed to create transaction"));
    }
    const newHpp = await hppRepository.create({ ...req.body }, transaction.data);
    if (newHpp.success === false) {
      await transactionRepository.Rollback(transaction.data);
      throw flaverr("E_FAILED", new Error(newHpp.err));
    }
    await transactionRepository.Commit(transaction.data);
    return response.success(res, StatusCodes.CREATED, newHpp.result);
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message);
  }
};
