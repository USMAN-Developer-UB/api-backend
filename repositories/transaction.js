const { Sequelize, sequelize } = require('../models');

const library = {};

/**
 * Create for init transaction
 * @return {Object} Object containing success and transaction or error object
 */
library.Create = async () => {
  try {
    const t = await sequelize.transaction({
      isolationLevel: Sequelize.Transaction.READ_UNCOMMITTED || 'READ UNCOMMITTED',
    });

    return Promise.resolve({
      success: true,
      data: t,
    });
  } catch (err) {
    return Promise.reject({
      success: false,
      err,
    });
  }
};

/**
 * Commit transaction
 * @param  {Object} transactions Object of transaction
 * @return {Object}              Return object containing success adn or error object
 */
library.Commit = async (transactions) => {
  try {
    await transactions.commit();

    return Promise.resolve({
      success: true,
    });
  } catch (err) {
    await library.Rollback(transactions);
    return Promise.reject({
      success: false,
      err,
    });
  }
};

/**
 * Rollback transaction
 * @param  {Object} transactions Object of transaction
 * @return {Object}              Return object containing success and or error object
 */
library.Rollback = async (transactions) => {
  try {
    await transactions.rollback();

    return Promise.resolve({
      success: true,
    });
  } catch (err) {
    return Promise.reject({
      success: false,
      err,
    });
  }
};

module.exports = library;
