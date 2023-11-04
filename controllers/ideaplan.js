const ideaPlanRepository = require("../repositories/ideaplan");
const response = require("../utils/response");
const { StatusCodes } = require("http-status-codes");
const transactionRepository = require("../repositories/transaction");
const jwtMiddleware = require("../middleware/jwt");
const flaverr = require("flaverr");

const library = {};
module.exports = library;

library.create = async (req, res) => {
  try {
    const transaction = await transactionRepository.Create();
    if (transaction.success === false) {
      throw flaverr("E_FAILED", new Error("Failed to create transaction"));
    }
    const newIdeaPlan = await ideaPlanRepository.create({ ...req.body }, req.user.id, transaction.data);
    if (newIdeaPlan.success === false) {
      await transactionRepository.Rollback(transaction.data);
      throw flaverr("E_FAILED", new Error(newIdeaPlan.err));
    }
    await transactionRepository.Commit(transaction.data);
    return response.success(res, StatusCodes.CREATED, newIdeaPlan.result);
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message);
  }
};

library.findByUser = async (req, res) => {
  try {
    const ideaPlan = await ideaPlanRepository.findByUser(req.user.id);
    if (ideaPlan.success === false) {
      throw ideaPlan.err;
    }
    return response.success(res, StatusCodes.OK, ideaPlan.result);
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message);
  }
};

library.findById = async (req, res) => {
  try {
    const ideaPlan = await ideaPlanRepository.findById(req.params.id_ideaplan);
    if (ideaPlan.success === false) {
      throw ideaPlan.err;
    }
    return response.success(res, StatusCodes.OK, ideaPlan.result);
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message);
  }
};

library.findAll = async (req, res) => {
  try {
    const ideaPlan = await ideaPlanRepository.findAll();
    if (ideaPlan.success === false) {
      throw ideaPlan.err;
    }
    return response.success(res, StatusCodes.OK, ideaPlan.result);
  } catch (err) {
    return response.fail(res, StatusCodes.INTERNAL_SERVER_ERROR, err.message);
  }
};
